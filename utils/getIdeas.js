export const getIdeas = ({ data, error }) => {
  try {
    if (data) {
      return JSON.stringify(data, null, 2)
    }

    if (error) alert(error.message)
  } catch (error) {
    alert('Error: ' + error.code + ' ' + error.message)
  }
}
