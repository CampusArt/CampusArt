export default function Ferrales() {

  const data = [
    {id: "1", link: "https://www.instagram.com/p/CUXJGg9hllC/", status: "published", background: `url(https://fetchnow.herokuapp.com/media?id=aHR0cHM6Ly9zY29udGVudC1pYWQzLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1L2UzNS9wMTA4MHgxMDgwLzI0MzA1MjYxOF84ODQwNTU4NTIyMTQyNjFfMTQ4ODgxNzYyMzY4MjU5Njc0NV9uLmpwZz9fbmNfaHQ9c2NvbnRlbnQtaWFkMy0yLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDEmX25jX29oYz1CUVJocUZlSlZqa0FYOVdoMWdvJmVkbT1BSkJnWnJZQkFBQUEmY2NiPTctNCZvaD04MzkzMzI0Y2E0OTc1MjZmZTgzMDkwYmY1ZjIzMzI1NiZvZT02MTVDQzZDQyZfbmNfc2lkPTc4YzY2Mg==)`},
    {id: "2", link: "https://www.instagram.com/p/CUM0T-2hZ-4/",  status: "published", background: `url(https://fetchnow.herokuapp.com/media?id=aHR0cHM6Ly9zY29udGVudC1pYWQzLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1L2UzNS9wMTA4MHgxMDgwLzI0Mjg2MzE2Nl8xMDIzMzY1NzkxODMwOTA1XzEyMTMxNDUxMzQ4NzU2MDUwMjhfbi5qcGc/X25jX2h0PXNjb250ZW50LWlhZDMtMi5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA1Jl9uY19vaGM9N00zTktELWZxR1VBWC0tblQ4ZCZlZG09QUpCZ1pyWUJBQUFBJmNjYj03LTQmb2g9YzBmOWQ2Y2MyMzIwZDQ0Y2NjOWMwNjRmZmZhMTA3YTEmb2U9NjE1Qzg2MDQmX25jX3NpZD03OGM2NjI=)`},
    {id: "3", link: "https://www.instagram.com/p/CUL5j4KBWxa/",  status: "published", background: `url(https://fetchnow.herokuapp.com/media?id=aHR0cHM6Ly9zY29udGVudC1pYWQzLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1L2UzNS9zMTA4MHgxMDgwLzI0Mjg0NTQwOF84NDMzNzkxNjk3MDgxNjJfNDE4NTQyNjQyNjk5NDQ0MDQ0M19uLmpwZz9fbmNfaHQ9c2NvbnRlbnQtaWFkMy0yLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDImX25jX29oYz1fcXh5LTFFal8wa0FYOWJQTjBVJmVkbT1BSkJnWnJZQkFBQUEmY2NiPTctNCZvaD1kYjY0ZTEzODJmMGM5YzU0YmRiNzhjODNjMmQxZTg4YiZvZT02MTVENDg3NSZfbmNfc2lkPTc4YzY2Mg==)`},
    {id: "4", link: "https://www.instagram.com/p/CUHrVVJhPc9/", status: "published", background: `url(https://fetchnow.herokuapp.com/media?id=aHR0cHM6Ly9zY29udGVudC1pYWQzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1L2UzNS9wMTA4MHgxMDgwLzI0MjM5Nzk2Ml8xNzY5ODAwNDQzMjEyNTgzXzc4MDc4NjAxMjYzNjE2MDcwNThfbi5qcGc/X25jX2h0PXNjb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTAzJl9uY19vaGM9b2VfU0Rkd0NFMnNBWDg4cWhQOCZlZG09QUpCZ1pyWUJBQUFBJmNjYj03LTQmb2g9ZmI2ZGNlNzhkN2NjNWQzZjdmN2YzNWRlNzJiNGQxNzMmb2U9NjE1RDJFNDMmX25jX3NpZD03OGM2NjI=)`},
    {id: "5", link: "https://www.instagram.com/p/CUChduCB1Qr/", status: "published", background: `url(https://fetchnow.herokuapp.com/media?id=aHR0cHM6Ly9zY29udGVudC1pYWQzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1L2UzNS9wMTA4MHgxMDgwLzI0MjM0MzkxN18xODU2MzQwNTU3ODk0MzgxXzM0OTkwNjkwNDUyNzk0OTQ5MTdfbi5qcGc/X25jX2h0PXNjb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA1Jl9uY19vaGM9RzZUOUZZRkFBNUVBWC1Tc0xoYyZlZG09QUpCZ1pyWUJBQUFBJmNjYj03LTQmb2g9MjVkY2IxYTI4MGJkMTQ4MGU1NWQ5Mzc1MmM2YjAzMDgmb2U9NjE1Q0QxNDgmX25jX3NpZD03OGM2NjI=`},
    {id: "6", link: "https://www.instagram.com/p/CTqmZleDJjt/", status: "published", background: `url(https://i.ibb.co/X7w3pcs/Farrales-Video.png)`},
    {id: "7", link: "https://www.instagram.com/p/CThCig-lSWm/", status: "published", background: `url(https://fetchnow.herokuapp.com/media?id=aHR0cHM6Ly9zY29udGVudC1vcnQyLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1L2UzNS9wMTA4MHgxMDgwLzI0MTI5MTUzN185ODg1NDUyOTUyNTk5ODBfNzMwODA4MTE4OTY1ODQ1MDIwN19uLmpwZz9fbmNfaHQ9c2NvbnRlbnQtb3J0Mi0yLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDQmX25jX29oYz05YTlrMnowQTcyd0FYX2JpYkw3JmVkbT1BSkJnWnJZQkFBQUEmY2NiPTctNCZvaD1jYWEyYmJmYWNjZjliM2RiNWE1NDIwZWRiN2QyODgxNyZvZT02MTVCRTkxNSZfbmNfc2lkPTc4YzY2Mg==)`},
    {id: "8", link: "https://www.instagram.com/p/CUL5j4KBWxa/", status: "draft", background: `#FD6F25`},
    {id: "9", link: "https://www.instagram.com/p/CUL5j4KBWxa/", status: "draft", background: `#04F0D3`},
    {id: "10", link: "https://www.instagram.com/p/CUL5j4KBWxa/", status: "draft", background: `#F6EC53`},
    {id: "11", link: "https://www.instagram.com/p/CUL5j4KBWxa/", status: "draft", background: `#00F400`},
    {id: "12", link: "https://www.instagram.com/p/CUL5j4KBWxa/", status: "draft", background: `#AD13FF`},
  ]

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
            <p>
              In 2021, the College of Saint Benilde was gifted with a collection of garments created by the Dean 
              of Philippine fashion, Ben Farrales. Totalling 40 pieces, the collection is composed of gowns, dresses, 
              Filipiniana, and single items like skirts and capes, demonstrating the range of artistry and skill of the 
              esteemed fashion designer. The Center for Campus Art (CCA) partners with the students of the Fashion Design 
              and Merchandising (FDM) program for an Instagram exhibit that responds to the pieces in the collection.
            </p>
            <p className="author">- Ar. Gerry Torres, Curator.</p>
          </div>
          <div id="grid">
            {
              data.length > 0 ? (
                data.map((d, i) => {
                  if(d.status === "published") {
                    return (
                      <a href={`${d.link}`} target="_blank" rel="noreferrer" style={{backgroundImage: `${d.background}` }} className="item published"> </a>
                    )
                  } else {
                    return (
                      <div className="item" style={{background: `${d.background}`}}></div>
                    )
                  }
                })
              ) : null
            }
          </div>
        </div>
      </section>
    </main>
  )
}
