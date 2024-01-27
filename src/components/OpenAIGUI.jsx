import wolf from '../Images/wolf.jpg';
import wolfTwo from '../Images/wolfIcon.jpg';
import wolfThree from '../Images/wolfIconT.jpeg';
import React, { useState, useEffect } from 'react';

const OpenAIGUI = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
      <div className="loader-container">
    {
        isLoading ? (
            <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
        :
        (
            <section className="open-ai-sec">
            <div className="container mt-5">
              <h4 className="fw-bold ">chat gpt evolution</h4>
              <div className="row">
                <div className="col-lg-8">
                  <section id="response-resources-section">
                    <h5 className="fw-normal mt-4">
                      {" "}
                      <i className="fa-solid fa-list text-info" /> Sources...
                    </h5>
    
                    <div className="d-flex justify-content-start mt-3 mb-3">
                      <div className="card resource-cards bg-light" >
                        <div className="card-body">
                          This is some text within a card body...
                          <br />
                          <i className="fa-brands fa-linkedin fs-6 mt-2"/>  linkedin .1
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <div className="card resource-cards bg-light">
                        <div className="card-body">
                          This is some text within a card body...
                          <br />                 
                          <i className="fa-brands fa-facebook fs-6 mt-2"/> facebook .5
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <div className="card resource-cards  bg-light">
                        <div className="card-body">
                          This is some text within a card body.
                          <br />
                          <i className="fa-brands fa-youtube fs-6 mt-2"/> youtube .7
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <div className="card resource-cards  bg-light">
                        <div className="card-body">
                          This is some text within a card body.
                          <br />
    
                          <p className="mt-2">View 2 more</p>
                        </div>
                      </div>
                    </div>
                  </section>
    
                  <h5 className="fw-normal  mt-4">
                    {" "}
                    <i className="fa-solid fa-align-left text-info" /> Answer
                  </h5>
    
                  <div className="text-answer">
                    <div className="card-body">
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eaque tempore deserunt, et explicabo velit
                        accusantium nesciunt facere molestiae culpa mollitia. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. 
                        
                        <ul className="mt-2">
    
                            <li className="mt-2 mb-2">
                            <span className="fw-bold">Personalized Learning:</span>
                            &nbsp;&nbsp;
                            Future versions of Chat GPT could enable students to engage in natural conversations with AI-powered virtual tutors, providing a more personalized learning experience
                            </li>
    
                            <li className="mt-2 mb-2">
                            <span className="fw-bold">Improved Model Alignment:</span>
                            &nbsp;&nbsp;
                            GPT-4 has improved model alignment, allowing it to better follow user intentions and generate more accurate responses
                            </li>
    
    
                            <li className="mt-2 mb-2">
                                <span className="fw-bold">Lower Likelihood of Offensive or Dangerous Output:</span>
                                &nbsp;&nbsp;
                                GPT-4 has a lower likelihood of generating offensive or dangerous output, making it safer for users
                            </li>
    
                            <li className="mt-2 mb-2">
                                <span className="fw-bold">Increased Factual Accuracy:</span>
                                &nbsp;&nbsp;
                                GPT-4 produces more factually correct information compared to previous versions
    
                            </li>
                               
                        </ul>
    
                        Overall, Chat GPT has significantly impacted the field of conversational AI and continues to evolve, offering exciting possibilities for the future
                             
                      </p>
                    </div>
    
                    <div class="d-flex bd-highlight">
                      <div class="p-2 flex-grow-1 bd-highlight fw-bold">
                        <a
                          className="text-info"
                          href=""
                          style={{ textDecoration: "none" }}
                          onClick={() => alert("share-working")}
                        >
                          <i className="fa-solid fa-share " />
                          &nbsp;<span className="text-black fw-normal">Share</span>
                        </a>
                        &nbsp;&nbsp;
                        <a
                          className="text-info"
                          href=""
                          style={{ textDecoration: "none" }}
                          onClick={() => alert("rewrite-working")}
                        >
                          <i className="fa-solid fa-rotate text-info" />
                          &nbsp;
                          <span className="text-black fw-normal">Rewrite</span>
                        </a>
                      </div>
    
                      <div class="p-2 bd-highlight">
                        <a
                          className="text-info"
                          href=""
                          style={{ textDecoration: "none" }}
                          onClick={() => alert("thumb btn-working")}
                        >
                          <i className="fa-solid fa-thumbs-down" />
                        </a>
                      </div>
                      <div class="p-2 bd-highlight">
                        <a
                          className="text-info"
                          href=""
                          style={{ textDecoration: "none" }}
                          onClick={() => alert("align btn-working")}
                        >
                          <i class="fa-solid fa-align-right"></i>
                        </a>
                      </div>
    
                      <div class="p-2 bd-highlight">
                        <a
                          className="text-info"
                          href=""
                          style={{ textDecoration: "none" }}
                          onClick={() => alert("clipboard btn-working")}
                        >
                          <i className="fa-solid fa-clipboard" />
                        </a>
                      </div>
    
                      <div class="p-2 bd-highlight">
                        <a
                          className="text-info"
                          href=""
                          style={{ textDecoration: "none" }}
                          onClick={() => alert("edit  btn-working")}
                        >
                          <i className="fa-solid fa-pen-to-square" />
                        </a>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                  <h5 className="mt-5">
                  <i className="fa-solid fa-layer-group text-info"/>
                  &nbsp;
                  Related
                  </h5>
                  <hr className="my-4" />
    
    
    
    
    <section className="mb-5">
    <div className="accordion accordion-flush" id="accordionFlushExample">
    
      <div className="accordion-item">
        <h2 className="accordion-header " id="flush-headingOne">
          <button className="accordion-button collapsed fw-bold related-qOne" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
           What are the sum key features of chat gpt?
          </button>
        </h2>
        {/* <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div> */}
      </div>
    
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed fw-bold related-qOne" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          The benefits of using open AI ... 
          </button>
        </h2>
        {/* <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div> */}
      </div>
    
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button className="accordion-button collapsed fw-bold related-qOne" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Summarizing tools and other stuff according to open ai !
          </button>
        </h2>
        {/* <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div> */}
      </div>
    
    </div>
    
    </section>
    
    
    
                </div>
    
                <div className="col-lg-3 mx-auto">
                  <div className="card ">
                    <div className="card-body">
                        <img className="img-fluid w-100" src={wolf} alt="" style={{height:"15em"}}/> 
    
                    </div>
                
                  </div>
    
    <div className="d-flex">
                  <div className="card mt-3">
                    <div className="card-body">
                        <img className="img-fluid w-100" src={wolfTwo} alt="" /> 
                        
                    </div>
                
                  </div>
                  &nbsp;&nbsp;
    
                  <div className="card mt-3">
                    <div className="card-body">
                        
                        <img className="img-fluid w-100" src={wolfThree} alt="" /> 
                    </div>
                
                  </div>
                  </div>
    
                  <section className="mt-4">
    <div className="accordion accordion-flush" id="accordionFlushExample">
    
      <div className="accordion-item" >
        <h2 className="accordion-header " id="flush-headingOne" >
          <button className="accordion-button collapsed fw-bold related-qOne" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
          style={{fontSize:"12px"}}
          >
           What are the sum key features of chat gpt?
          </button>
        </h2>
        {/* <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div> */}
      </div>
    
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed fw-bold related-qOne" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
                style={{fontSize:"12px"}}
    
          >
          The benefits of using open AI ... 
          </button>
        </h2>
        {/* <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div> */}
      </div>
    
    
    
    </div>
    
    </section>
    
    
                </div>
    {/* 
                <div className="col-lg-3">
                  <div className="card ">
                    <div className="card-body">
                        <img className="img-fluid w-100" src={wolfTwo} alt="" style={{height:"15em"}}/> 
    
                    </div>
                
                  </div>
                </div> */}
    
                
              </div>
            </div>
          </section>
        )

    }
</div>
 
    </>
  );
};

export default OpenAIGUI;
