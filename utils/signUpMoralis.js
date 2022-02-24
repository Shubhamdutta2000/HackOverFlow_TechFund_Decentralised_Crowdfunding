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
        if (isAuthenticated) return;

        if (authError) { console.log(authError); alert(authError.message); }

        if (userError) { console.log(userError); alert(userError.message); }

        if (!userError && !isAuthenticated)
            signup(username, password, email, { userType: userType });

        // Hooray! Let them use the app now.
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
    }
};