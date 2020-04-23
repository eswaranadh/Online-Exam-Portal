import React from 'react'

function Presentation(props) {
    const { handleChange, handleSubmit, handleTitle } = props
    const qstn1to90 = props.qstns.slice(0,90)
    const qstn91to180 = props.qstns.slice(90,180)
    return (
        <div>
                <div>
                    <form onSubmit={handleSubmit} >
                       <input type="text" placeholder="Enter title" onChange={handleTitle} required/>
                     <fieldset className="form-group">
                       <ol style={{display:"flex", justifyContent:"space-around"}} >
                           <div>
                           {
                               qstn1to90.map(qstn => {
                                return(<li key={qstn} >
                                    <div style={{display:"flex"}}>
                                        <label for={qstn+"1"} className="paper-check">
                                        <input type="radio" onChange={handleChange} name={qstn} id={qstn+"1"} value="1" /> <span></span>
                                        </label>
                                        <label for={qstn+"2"} className="paper-check">
                                            <input type="radio" onChange={handleChange} name={qstn} id={qstn+"2"} value="2" /> <span></span>
                                        </label>
                                        <label for={qstn+"3"} className="paper-check">
                                            <input type="radio" onChange={handleChange} name={qstn} id={qstn+"3"} value="3" /> <span></span>
                                        </label>
                                        <label for={qstn+"4"} className="paper-check">
                                            <input type="radio" onChange={handleChange} name={qstn} id={qstn+"4"} value="4" /> <span></span>
                                        </label>        
                                    </div>
                                </li>)
                               })
                           }
                          
                           </div>
                           <div>
                           {
                               qstn91to180.map(qstn => {
                                return(<li key={qstn} >
                                    <div style={{display:"flex"}}>
                                        <label for={qstn+"1"} className="paper-check">
                                        <input type="radio" onChange={handleChange} name={qstn} id={qstn+"1"} value="1" /> <span></span>
                                        </label>
                                        <label for={qstn+"2"} className="paper-check">
                                            <input type="radio" onChange={handleChange} name={qstn} id={qstn+"2"} value="2" /> <span></span>
                                        </label>
                                        <label for={qstn+"3"} className="paper-check">
                                            <input type="radio" onChange={handleChange} name={qstn} id={qstn+"3"} value="3" /> <span></span>
                                        </label>
                                        <label for={qstn+"4"} className="paper-check">
                                            <input type="radio" onChange={handleChange} name={qstn} id={qstn+"4"} value="4" /> <span></span>
                                        </label>        
                                    </div>
                                </li>)
                               })
                           }
                          
                           </div>
                           
                          
                       </ol>
                       {
                            !props.isCreating ?
                            <div style={{textAlign:"center"}}>
                                <button type="submit" >Submit</button>
                            </div>
                            :
                            <div style={{textAlign:"center"}}>
                                <p>Session is being created ...</p>
                            </div>
                        }
                </fieldset>
                </form>
               
            
                </div>
        </div>
    )
}

export default Presentation
