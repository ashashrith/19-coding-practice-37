// Write your code here
import {Component} from 'react'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

class CowinDashboard extends Component {
  state = {last7DaysList: [], genderVaccineList: [], ageVaccineList: []}

  componentDidMount() {
    this.getResponseData()
  }

  getResponseData = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const formattedList = data.last_7_days_vaccination.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      }))

      this.setState({
        last7DaysList: formattedList,
        genderVaccineList: data.vaccination_by_gender,
        ageVaccineList: data.vaccination_by_age,
      })
    }
  }

  render() {
    const {last7DaysList, genderVaccineList, ageVaccineList} = this.state

    return (
      <div className="bg-container">
        <div className="f-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo
"
            className="logo-img"
          />
          <h1 className="web-heading">Co-WIN</h1>
        </div>
        <p className="p">Co-WIN Vacination in India</p>
        <VaccinationCoverage last7DaysList={last7DaysList} />
        <VaccinationByGender genderVaccineList={genderVaccineList} />
        <VaccinationByAge ageVaccineList={ageVaccineList} />
      </div>
    )
  }
}

export default CowinDashboard
