import React from "react"
import Head from "../component/header"
import Dev from "./developer"
import BottomNav from "../component/bottomnav"




export default function Faq(){

    return(
        <>
        <Head />
        <Dev />
        <BottomNav faq={{color:"orange"}} />
        
        

        <section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Frequently asked Questions.</p>
        </div>

        <div className="faq-list">
          <ul>
            <li>
              <i className="fa fa-question icon-help"></i> <a className="collapsed">Non consectetur a erat nam at lectus urna duis? <i className="fa fa-chevron-down icon-show"></i></a>
              <div id="faq-list-1" className="collapse show">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li>
              <i className="fa fa-question icon-help"></i> <a className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i onClick={()=>{document.getElementById("faq-list-2").classList.toggle("collapse")}} className="fa fa-chevron-down icon-show"></i></a>
              <div id="faq-list-2" className="collapse">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li>
              <i className="fa fa-question icon-help"></i> <a className="collapsed">Dolor sit amet consectetur adipiscing elit? <i onClick={()=>{document.getElementById("faq-list-3").classList.toggle("collapse")}} className="fa fa-chevron-down icon-show"></i></a>
              <div id="faq-list-3" className="collapse">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

            <li>
              <i className="fa fa-question icon-help"></i> <a className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i onClick={()=>{document.getElementById("faq-list-4").classList.toggle("collapse")}} className="fa fa-chevron-down icon-show"></i></a>
              <div id="faq-list-4" className="collapse">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>

            <li>
              <i className="fa fa-question icon-help"></i> <a className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i onClick={()=>{document.getElementById("faq-list-5").classList.toggle("collapse")}} className="fa fa-chevron-down icon-show"></i></a>
              <div id="faq-list-5" className="collapse">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>


        </>
    )
}