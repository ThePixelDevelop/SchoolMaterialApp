// Edita este arreglo cada vez que agregues o quites archivos en la carpeta "archivos/"
    const ARCHIVOS = [
      {
        nombre: "Unidad 1: Libro - Introducción a los Videojuegos",
        ruta: "Archivos/guia-unidad1.pdf",
        tipo: "PDF",
        fecha: "2026-11-22",
        descripcion: "Libro de texto de la primera unidad"
      },
      {
        nombre: "Unidad 2: Libro - Creación de videojuegos",
        ruta: "Archivos/Tecno3Unidad2DesarrolloGame.pdf",
        tipo: "PDF",
        fecha: "2026-11-22",
        descripcion: "Libro de texto de la segunda unidad"
      },
      {
        nombre: "Ejercicio de práctica - Semana 1",
        ruta: "Archivos/PersonajeBaseParpadea.png",
        tipo: "PNG",
        fecha: "2026-11-22",
        descripcion: "Diseño (frames) del personaje parpadeando"
      },
      {
        nombre: "Ejercicio de práctica 01 - Semana 2",
        ruta: "Archivos/PersonajeBaseCamina.png",
        tipo: "PNG",
        fecha: "2026-11-22",
        descripcion: "Diseño (frames) del personaje caminando"
      },
      {
        nombre: "Ejercicio de práctica 02 - Semana 2",
        ruta: "Archivos/PersonajeBaseSalta.png",
        tipo: "PNG",
        fecha: "2026-11-22",
        descripcion: "Diseño (frames) del personaje saltando"
      },
      {
        nombre: "Ejercicio de práctica 01 - Semana 3",
        ruta: "Archivos/PersonajeBaseSkin.png",
        tipo: "PNG",
        fecha: "2026-11-22",
        descripcion: "Conjunto de posibles skins para el personaje base"
      },
      {
        nombre: "Video guía 'Creando primer juego' - Semana 3",
        ruta: "Archivos/juegonuevo.mp4",
        tipo: "MP4",
        fecha: "2026-11-24",
        descripcion: "Video simple e introductorio, que explica como crear el primer proyecto"
      }
      //{
        //nombre: "Ejercicios de práctica - Semana 1",
        //ruta: "archivos/ejercicios-semana1.zip",
        //tipo: "ZIP",
        //fecha: "2026-11-22"
      //}
    ];

    const listaEl = document.getElementById("lista-archivos");
    const buscadorEl = document.getElementById("buscador");

    function renderizar(filtro = "") {
      const consulta = filtro.trim().toLowerCase();
      const filtrados = ARCHIVOS.filter((item) =>
        item.nombre.toLowerCase().includes(consulta) ||
        item.tipo.toLowerCase().includes(consulta) ||
        item.ruta.toLowerCase().includes(consulta)
      );

      if (filtrados.length === 0) {
        listaEl.innerHTML = '<div class="vacio">No se encontraron archivos con ese filtro.</div>';
        return;
      }

      listaEl.innerHTML = filtrados
        .map(
          (item) => `
          <article class="archivo">
            <div>
              <p class="archivo-titulo">${escaparHTML(item.nombre)}</p>
              <div class="archivo-meta">${escaparHTML(item.tipo)} · Subido: ${escaparHTML(item.fecha)}</div>
              <div class="archivo-meta">${escaparHTML(item.descripcion)}</div>
            </div>
            <a class="btn-descargar" href="${escaparHTML(item.ruta)}" download>Descargar</a>
          </article>
        `
        )
        .join("");
    }

    function escaparHTML(texto) {
      const div = document.createElement("div");
      div.textContent = texto;
      return div.innerHTML;
    }

    buscadorEl.addEventListener("input", (e) => renderizar(e.target.value));
    renderizar();