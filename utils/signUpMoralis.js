export const useSignUp = ({
    name: username,
    email,
    password,
    userType,
    signup,
    isAuthenticated,
    authError,
    userError,
}) => {
    try {
        if (!userError && !isAuthenticated && !authError) signup(username, email, password, { userType: userType })

        if (authError) {
            alert(authError.message);
        }

        // Hooray! Let them use the app now.
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
    }
};