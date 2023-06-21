// Write your code here
import './index.css'

const VaccinationByGender = props => {
  const {genderVaccineList} = props
  const {count, gender} = genderVaccineList

  return (
    <div className="var-cont">
      <p className="var-heading">Vaccination by gender</p>
    </div>
  )
}

export default VaccinationByGender
