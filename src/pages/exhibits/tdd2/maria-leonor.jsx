import { useEffect } from "react"
import Youtube from "react-youtube";
import {Link} from "react-router-dom"
import Leonor from "../../../assets/images/LEONOR.jpg"

export default function Leni() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const opts = {
    height: '840px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <main id="tdd2" className="template leni">
      <div className="container">
        <Youtube
          videoId="y35-vZiw48w"
          opts={opts}
        />
        <h1 className="title glow">"MARIA LEONOR"</h1>
        <h3 className="author glow">SEYMOUR SANCHEZ</h3>
      </div>
      <section>
        <div className="container">
          <p><strong>Synopsis</strong> <br/>“Maria Leonor” is an open letter to the beleaguered vice president of the Philippines and leader of the opposition, VP Maria Leonor “Leni” Gerona Robredo – one of the most, if not the most trolled, public officials in the country. Despite false accusations and ad hominem attacks against her, she continues to work with the relatively smaller budget that her office has gotten every year. Last October 7, 2021, she declared that she is running for the nation's top post in the coming election.</p>
          <p><strong>Director's Note</strong> <br/>The COVID-19 crisis has revealed that some countries with women leaders have been shining examples of effective and vital leadership in their response to the pandemic. Despite challenges associated with them being women, they have been proactive in responding to the threat of the virus, seeking expert advice to inform health strategies, implementing social distancing restrictions early, and unifying their respective countries around a comprehensive response with compassionate and transparent communication. Meanwhile, in the Philippines, the administration continues to impose its might, preferring an approach other than the more appropriate medical solution to a health problem. A Filipina leader is relegated to the background.</p>
          <div className="flex">
            <div style={{flex: '1'}}>
              <img src={Leonor} alt="" style={{padding: "24px", width: '100%'}} />
            </div>
            <div style={{flex: '2'}}>
              <p>Maria Leonor “Leni” Gerona Robredo won the vice-presidential contest in the 2016 elections. After five years, the Supreme Court, sitting as the Presidential Electoral Tribunal, unanimously upheld her victory by junking the electoral protest filed against her by losing candidate Ferdinand “Bongbong” Marcos, Jr. Despite this, she continuously bears the brunt of being called a “fake VP” and other false information spread by the camps of President Rodrigo Duterte, Marcos, Jr. and others. VP Leni belongs to and leads the opposition party and was not Duterte’s choice to become vice president. Duterte’s former spokesperson Harry Roque said that the president could step down from his post if Marcos, Jr. had succeeded in overturning his vice-presidential election defeat. Duterte believes that a woman like VP Leni is not fit to do his job.</p>
              <p>“Maria Leonor” aims to highlight a Filipina leader’s resolve to continue doing her work despite the odds. It tries to answer what drives someone like her and what unique traits do women leaders have which enable them to be deeply engaged and be successful in their projects even during the pandemic. The documentary seeks to assert that Filipino women can become very good leaders if they will not let themselves be pulled down and prevailed upon by patriarchal dictates. They should have greater representation in some of the highest positions in the government and industry, which would allow them to be directly involved in setting directions and making important decisions.</p>
            </div>
          </div>
          <p><strong>Director's Profile</strong> <br/> Seymour Barros Sanchez is an advocacy filmmaker, communication and film lecturer, freelance writer, content and creative producer, creative consultant, and a former producer for news and current affairs programs. He is a fellow of the 17th Lopez Jaena Community Journalism Workshop (organized by the University of the Philippines College of Mass Communication), 21st Iligan National Writers Workshop (organized by the Mindanao State University – Iligan Institute of Technology) and 9th Palihang Rogelio Sicat (organized by the UP Departamento ng Filipino at Panitikan ng Pilipinas). He is also a graduate of the 14th Ricky Lee scriptwriting workshop and the first Active Vista film and media for human rights advocacy workshop.</p>
          <p>"Maria Leonor" in print and online publications</p>
          <p><a href="https://businessmirror.com.ph/2021/11/20/educator-pens-open-letter-to-robredo-through-film/">Educator pens open letters to Robredo through film</a></p>
          <p><a href="https://www.clickthecity.com/movies/article/109109/maria-leonor/">Docufilm About VP Leni ‘Maria Leonor’ Joins Benilde’s Online Art Exhibition</a></p>
          <p><a href="https://expatphilippines.ph/articles/educator-pens-open-letter-to-vp-leni-via-film/">Educator pens open letter to VP Leni via film</a></p>
          <p><a href="https://astig.ph/maria-leonor-documentary-leni-robredo-produced-educators/">“Maria Leonor” is a documentary about Leni Robredo produced by educators</a></p>
          <p><a href="http://www.wazzuppilipinas.com/2021/11/educator-pens-open-letter-to-vp-leni.html">Educator pens open letter to VP Leni via film</a></p>
          <p><a href="https://www.psr.ph/index.php/educator-dedicates-his-film-to-vp-robredo/">Educator dedicates his film to VP Robredo </a></p>
          <p><a href="https://www.psr.ph/index.php/sanchez-writes-open-letter-to-vp-leni/">Sancez writes open letter to VP Leni</a></p>
          <p><a href="http://www.wazzuppilipinas.com/2021/11/short-ph-docu-vies-in-uk-dreamanila.html">Short PH docu vies in UK, Dreamanila filmfests</a></p>
          <p><a href="https://expatphilippines.ph/articles/short-docu-on-vp-leni-vies-in-uk-dreamanila-filmfests/">Short docu on VP Leni vies in UK, Dreamanila filmfests </a></p>
          <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
        </div>
      </section>
    </main>
  )
}