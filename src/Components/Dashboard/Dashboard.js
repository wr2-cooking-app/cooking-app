import Axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MealPlanIdContext } from "../../contexts/MealPlanIdContext";
import { UserContext } from "../../contexts/UserContext";
import "./Dashboard.scss";

function Dashboard(props) {
  const { userData } = useContext(UserContext);
  const { setMealPlanId } = useContext(MealPlanIdContext);
  const [mealName, setMealName] = useState("");
  const [mealPlans, setMealPlans] = useState([]);
  const [editView, setEditView] = useState(false);
  const [editName, setEditName] = useState("");

  const getMealPlans = useCallback(() => {
    Axios.get(`/api/meal-plans/${userData.id}`)
      .then((res) => {
        setMealPlans(res.data);
      })
      .catch((err) => console.log(err));
  }, [userData.id]);

  useEffect(() => {
    getMealPlans();
  }, [getMealPlans, mealName]);

  const handleAddNew = () => {
    Axios.post("/api/add-mealplan", { userId: userData.id, name: mealName })
      .then(() => {
        console.log("hello");
        setMealName("");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    Axios.delete(`/api/delete/mealplan/${id}`)
      .then(() => {
        getMealPlans();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitChange = (id) => {
    Axios.put(`/api/edit/mealplan/${id}`, { name: editName })
      .then(() => {
        getMealPlans();
        setEditView();
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    Axios.get(`/api/meal-plan/${id}`)
      .then(() => {
        setEditView(!editView);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2 className="name-plan">{userData.first_name}'s Meal Plans</h2>
        <div className="dashboard-add-new">
          <input
            className="dash-input"
            value={mealName}
            placeholder="meal plan name"
            onChange={(e) => setMealName(e.target.value)}
          />
          <button className="dash-button" onClick={handleAddNew}>
            Add New
          </button>
        </div>
        {mealPlans.map((mp, i) => (
          <div className="meal-section">
            <div className="left-meal-section">
              <span className="meal-plan-name">{i + 1}.</span>
              {!editView ? (
                <p className="meal-plan-name" onClick={() => handleEdit(mp.id)}>
                  {mp.name}
                </p>
              ) : (
                <div className="edit">
                  <input
                    className="edit-input"
                    value={editName}
                    placeholder={mp.name}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <button className="edit-button" onClick={() => handleSubmitChange(mp.id)}>
                    Submit
                  </button>
                </div>
              )}
            </div>
            <div className="dashboard-buttons">
              <Link to={`/cart/${mp.id}`}>
                <img src="https://image.flaticon.com/icons/svg/609/609496.svg" alt="cart" />
              </Link>
              <Link to={`/mealplan/${mp.id}`}>
                <img
                  onClick={() => setMealPlanId(mp.id)}
                  src="https://image.flaticon.com/icons/svg/645/645779.svg"
                  alt="edit"
                />
              </Link>
              <img
                onClick={() => handleDelete(mp.id)}
                src="https://image.flaticon.com/icons/svg/3209/3209887.svg"
                alt="delete"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
