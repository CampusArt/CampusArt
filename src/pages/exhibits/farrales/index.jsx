import InstagramFeed from "react-ig-feed";
// import InstagramGallery from "instagram-gallery"

export default function Ferrales() {
  return (
    <main id="ferrales" className="home">
      <section id="landing">
        <div className="container">
          <div id="title">
            <h1>
              FARRALES <br></br>
              X <br></br>
              F D M
            </h1>
          </div>
          <div id="description">
            <p style={{textAlign: 'center', color: "#F2EC63", padding: '50px 0px'}}>
              Benilde Fashion Design Students meet the Dean of Philippine Fashion
              <br/>
              An Instagram (IG) Exhibit by Benilde’s Center for Campus Art
              <br/>
              with the AB Fashion Design and Merchandising Program
            </p>
            <p>In 2021, the College of Saint Benilde was gifted by the family, a collection of garments created by the Dean of Philippine fashion, Ben Farrales. Totalling 41 pieces, the collection is made up of gowns, dresses, Filipiniana, and single items like skirts and capes, demonstrating the range of artistry and skill of Farrales. The Center for Campus Art (CCA) partners with the students of the Fashion Design and Merchandising (FDM) program for an online exhibit that is a response to the work of the esteemed fashion designer.
            </p>
            <p>Eighty sophomore students of Benilde’s Fashion Design and Merchandising program were asked to respond to the Ben Farrales collection, based on their research and from photos of the Benilde collection which were shared with them. Each student selected their inspiration from the collection and submitted three sketches and an explanation of how their work responds to Farrales. </p>
            <p>A pool of judges composed of FDM faculty, the CCA Director Ar Gerry Torres, and a guest judge, Cholo Ayuyao assessed the best 41 designs for exhibition. The chosen ones will be produced into miniature garments, put on dress forms measuring 36.5cm, photographed, and uploaded into an Instagram account created especially for this exhibit, farralesxfdm. The exhibit is curated by CCA Director, Ar Gerry Torres.</p>
            <p>Textiles, beads, feathers, and other materials, also donated by the family can be used by the students for their designs. The timeframe of the exhibit is from Term 1 to Term 2 of AY 2021-2022 (August 2021- April 2022.)</p>
            <p style={{textAlign: 'center', color: "#AB3BFB"}}>
              Proponents: <br/>
              Ar Gery Torres, Curator <br />
              Christine Cheryl Benet, Associate Dean, Environment Cluster <br />
              Olivia Lopez, Chair, AB-FDM <br />
              Roxoanne Bagano, Faculty, AB-FDM <br />
              Valerie Reyes, Faculty, AB-FDM <br />
              Cristina Escario, Faculty, AB-FDM <br />
            </p>
          </div>
          <InstagramFeed token="IGQVJYTXRLYlF3S29ta3FybTRId1BVYTg1dmtzSTdhLWpxbE5JcUtMLUZAkcjh5S3hkS0NxNUs3Q2VUVjVKUzIzY2RLWGVPVE5oWlFiZAVhfTGhmRmNFdWppenVKbTl4eFF1UllWNGItbzVkMXpYVWY0awZDZD" counter="100" />
          {/* <InstagramGallery accessToken="IGQVJVX09Ta0NGS1pnLXByTjlXdDd1dFJraEx1WHp5c3ZAuN3NJSkN0WTlPNEJ5MjZAmWG5tcDdveVpvUl91SG5oc19DVGwyLWRmVnJKUC1yamxsQTduSnladEl3UXdBRVczb3ZA1VWRNZA1pMWlV6Nzd4TwZDZD" count={24} pagination={true}/> */}
          <div style={{textAlign: 'center', padding: '24px 0px'}}>
            <a href="https://instagram.com/farralesxfdm" style={{textDecoration: "none", color: "#fff"}}>Visit the Instagram Page to See More</a>
          </div>
        </div>
      </section>
    </main>
  )
}
