INSERT INTO users (
    password,
    email,
    first_name,
    last_name,
    profile_picture
) VALUES (
    ${password},
    ${email},
    ${first_name},
    ${last_name},
    ${profile_picture}
)
returning id, email, first_name, last_name, profile_picture;