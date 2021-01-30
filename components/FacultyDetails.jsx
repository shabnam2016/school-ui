import React from 'react'
import styled from 'styled-components'

const Details = styled.div `
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
  text-align: center;
  color:#ffffff ;
  > h3 {
    font-weight:bold;
    font-size:25px;
  }
  > div {
    padding:5px;
    }
`

export default ({ name, email, departmentId, research_area }) => (
  <Details>
    <h3>{`${name}`}</h3>
    <div>
      Email:
      {` ${email}`}
    </div>
    <div>
      Department:
      {` ${departmentId}`}
    </div>
    <div>
      Research Interest:
      {` ${research_area}`}
    </div>
  </Details>
)
