export const createIdea = ({ formData, save, error }) => {
  try {
    if (formData) {
      save(formData)
      console.log(formData)
    }

    if (error) alert(error.message)
  } catch (error) {
    alert('Error: ' + error.code + ' ' + error.message)
  }
}
