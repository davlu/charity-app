import React from 'react'
import {Card, Badge} from 'react-bootstrap'

function formatString(str) {
    return str
    .replace(/(\B)[^ ]*/g,match =>(match.toLowerCase()))
    .replace(/^[^ ]/g,match=>(match.toUpperCase()));
  }
  
function Charity({charity}) {
    return (
        <Card className = "mb-3"> 
            <Card.Body>
                <div className = "d-flex justify-content-between">
                    <div>
                        <Card.Title>
                        <a href={charity.url} target="_blank"> {formatString(charity.charityName)}</a> - 
                            <span className = "text-muted font-weight-light">
                                {formatString(charity.city)}, {formatString(charity.state)}
                            </span>
                        </Card.Title>
                        <Card.Subtitle className = "mb-2">
                            {charity.category !== "Not Provided" &&  <Badge variant = "secondary">{charity.category}</Badge>}
                        </Card.Subtitle>
                        <div style = {{ wordBreak: 'break-all'}}>
                            <a href={charity.donationUrl} class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Click to donate</a>
                        </div>
                        
                        
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
//<img className = "d-none d-md-block" height = "50" alt = {charity.charityName} src = {/*todo*/}/>  for image
export default Charity;