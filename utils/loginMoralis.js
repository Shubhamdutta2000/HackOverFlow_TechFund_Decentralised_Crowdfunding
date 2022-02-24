export const useLogin = ({
    email,
    password,
    login,
    isAuthenticated,
    authError,
    userError,
}) => {
    try {
        if (isAuthenticated) return

        if (authError) alert(authError.message)

        if (userError) alert(userError.message)

        if (!isAuthenticated) login(email, password)

        // Hooray! Let them use the app now.
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert('Error: ' + error.code + ' ' + error.message)
    }
}