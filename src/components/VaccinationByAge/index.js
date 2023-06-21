// Write your code here

import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {ageVaccineList} = props
  const {age, count} = ageVaccineList

  return (
    <div className="vac-cont">
      <p className="vac-heading">Vaccination by age</p>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={age}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name={count} fill="#2cc6c6" />
          <Cell name={count} fill="#2d87bb" />
          <Cell name={count} fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
