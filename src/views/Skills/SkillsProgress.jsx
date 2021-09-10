import React from 'react'
import { skills } from '../../utils/skills'
import SkillsLinear from './skillsProgressStyle'

const SkillsProgress = ({ data }) => {
  return (
    <>
      <p>{data.title}</p>
      <SkillsLinear variant="determinate" value={parseInt(data.percentage)} />
    </>
  )
}

export default SkillsProgress
