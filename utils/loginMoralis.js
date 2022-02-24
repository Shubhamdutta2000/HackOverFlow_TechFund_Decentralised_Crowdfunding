export const useLogin = ({
    email,
    password,
    login,
    isAuthenticated,
    authError,
    userError,
}) => {
    try {
        if (!isAuthenticated && !userError && !authError) login(email, password)

        if (authError) {
            alert(authError.message);
        }
        if (userError) {
            alert(userError.message);
        }
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert('Error: ' + error.code + ' ' + error.message)
    }
}