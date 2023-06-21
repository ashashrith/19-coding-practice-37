// Write your code here
import './index.css'

import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {last7DaysList} = props
  const {vaccineDate, dose1, dose2} = last7DaysList

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="var-cont">
      <p className="vac-heading">Vaccination Coverage</p>
        <BarChart data={last7DaysList} margin={7}>
        <XAxis
          dataKey={vaccineDate}
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey={dose1} name={dose1} fill="#5a8dee" barSize="20%" />
        <Bar dataKey={dose2} name={dose2} fill="#f54394" barSize="20%" />
      <BarChart width={1000} height={300} />
    </div>
  )
}

export default VaccinationCoverage
