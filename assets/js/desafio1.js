// Función asincrónica para obtener datos de la API
async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    // Realiza la solicitud fetch a la API
    const response = await fetch(url);

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Analiza la respuesta como JSON
    const data = await response.json();

    // Muestra los datos en el HTML
    displayPosts(data);
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la solicitud
    console.error("Hubo un problema con la solicitud fetch:", error);
    document.getElementById("post-data").innerText =
      "Error al obtener los posts. Inténtalo de nuevo más tarde.";
  }
}

// Función para mostrar los posts en el HTML
function displayPosts(posts) {
  const postContainer = document.getElementById("post-data");
  

  let postsHTML = "";
  posts.forEach((post) => {
    postsHTML += `
            <div class="post">
                <h2>📌${post.title}</h2> 
                <p>${post.body}</p>
            </div>
        `;
  });

  postContainer.innerHTML = postsHTML;
}
