
const projects = [

  {
    id: "qec",
    cat: "quantum",
    num: "01",
    title: "FPGA-Based Error Correction",
    tag: "Quantum · FPGA",
    desc:
      "Hardware-accelerated quantum error correction with topology-aware decoding.",
    body:
      "A research project focused on hardware acceleration for quantum error correction, combining topology-aware decoding with an FPGA-oriented implementation.",
    bullets: [
      "Topology-aware quantum error correction",
      "FPGA acceleration",
      "RL-based decoding research"
    ],
    url:
      "https://github.com/arefin-nibir/FPGA_based_error_correction"
  },

  {
    id: "openvqa",
    cat: "quantum",
    num: "02",
    title: "OpenVQA Alpha 1.0",
    tag: "Quantum · VQA",
    desc:
      "Open-source contribution and verification work around variational quantum algorithms.",
    body:
      "Contribution and research work around OpenVQA Alpha 1.0, including repository development, benchmarking and black-box verification workflows.",
    bullets: [
      "Variational quantum algorithms",
      "Open-source development",
      "Benchmarking and verification"
    ]
  },

  {
    id: "pqc",
    cat: "quantum",
    num: "03",
    title: "Post-Quantum Cryptography",
    tag: "Quantum · Security",
    desc:
      "Research around lattice-based, code-based and hybrid cryptographic systems.",
    body:
      "Exploration and development work around post-quantum cryptography, including lattice-based and code-based approaches and hybrid quantum-classical threat models.",
    bullets: [
      "Lattice-based cryptography",
      "Code-based cryptography",
      "Hybrid PQC research"
    ]
  },

  {
    id: "quantalgo",
    cat: "quantum",
    num: "04",
    title: "QuantAlgoBreakdown",
    tag: "Quantum · Education",
    desc:
      "Educational quantum algorithm notebooks with mathematical derivations.",
    body:
      "Educational notebook work focused on explaining quantum algorithms through mathematical derivations and practical circuit implementations.",
    bullets: [
      "Quantum algorithms",
      "Mathematical derivations",
      "Educational notebooks"
    ]
  },

  {
    id: "shor",
    cat: "quantum",
    num: "05",
    title: "Quantum Factorization",
    tag: "Quantum · Algorithms",
    desc:
      "Shor's algorithm implementation with performance analysis.",
    body:
      "An implementation and analysis project exploring quantum factorization through Shor's algorithm.",
    bullets: [
      "Shor's algorithm",
      "Quantum circuits",
      "Performance analysis"
    ]
  },

  {
    id: "cirq-fpga",
    cat: "quantum",
    num: "06",
    title: "Cirq-to-FPGA",
    tag: "Quantum · Hardware",
    desc:
      "A bridge between quantum circuits and FPGA implementation workflows.",
    body:
      "A framework concept connecting Cirq circuit representations with FPGA implementation workflows.",
    bullets: [
      "Cirq circuits",
      "FPGA implementation",
      "Quantum-classical interface"
    ]
  },

  {
    id: "teleport",
    cat: "quantum",
    num: "07",
    title: "Quantum Communication Protocols",
    tag: "Quantum · Communication",
    desc:
      "Quantum teleportation and secure communication concepts.",
    body:
      "A project exploring quantum communication protocols including teleportation and secure communication concepts.",
    bullets: [
      "Quantum teleportation",
      "Secure communication",
      "Quantum protocols"
    ]
  },

  {
    id: "uddhar",
    cat: "software",
    num: "08",
    title: "Uddhar Native App",
    tag: "Mobile · AI",
    desc:
      "AI-powered emergency response application with SOS and real-time alerts.",
    body:
      "Led a five-person team building an AI-powered emergency response mobile application serving communities across Bangladesh.",
    bullets: [
      "SOS and shelter information",
      "Real-time notifications",
      "Scalable backend architecture"
    ]
  },

  {
    id: "gesture",
    cat: "software",
    num: "09",
    title: "Holographic Hand Gesture Interface",
    tag: "Computer Vision",
    desc:
      "Gesture recognition using OpenCV and MediaPipe.",
    body:
      "A computer-vision interface project using OpenCV and MediaPipe for hand gesture recognition.",
    bullets: [
      "OpenCV",
      "MediaPipe",
      "Gesture recognition"
    ]
  },

  {
    id: "jarvis",
    cat: "software",
    num: "10",
    title: "JARVIS Assistant",
    tag: "AI · Voice",
    desc:
      "Voice-activated AI assistant system.",
    body:
      "A voice-driven assistant project exploring conversational interaction and automation.",
    bullets: [
      "Voice interaction",
      "AI assistant architecture",
      "Automation"
    ]
  },

  {
    id: "cg",
    cat: "software",
    num: "11",
    title: "CG Predictor Model",
    tag: "Machine Learning",
    desc:
      "Academic performance prediction using regression analysis.",
    body:
      "A machine-learning project focused on academic performance prediction using regression analysis.",
    bullets: [
      "Regression analysis",
      "Machine learning",
      "Prediction modeling"
    ]
  },

  {
    id: "mobile",
    cat: "software",
    num: "12",
    title: "News · Weather · Expense",
    tag: "Mobile · Full Stack",
    desc:
      "Practical full-stack mobile applications.",
    body:
      "A collection of practical mobile applications covering news, weather and expense-tracking workflows.",
    bullets: [
      "Mobile development",
      "API-driven workflows",
      "Full-stack development"
    ]
  },

  {
    id: "robot",
    cat: "hardware",
    num: "13",
    title: "Dexter the Servo Robot",
    tag: "Robotics · IoT",
    desc:
      "Multi-axis servo-controlled robotic system.",
    body:
      "A robotics project centered on multi-axis servo control and physical system coordination.",
    bullets: [
      "Servo control",
      "Robotics",
      "Embedded systems"
    ]
  },

  {
    id: "cv-robotics",
    cat: "hardware",
    num: "14",
    title: "Computer Vision Robotics",
    tag: "Robotics · CV",
    desc:
      "Computer-vision-integrated robotic control system.",
    body:
      "A robotics project integrating computer vision into robotic control workflows.",
    bullets: [
      "Computer vision",
      "Robotic control",
      "Systems integration"
    ]
  }

];


const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  [...document.querySelectorAll(selector)];

const year = $("#year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}



const progress =
  $("#progress");

function updateProgress(){

  const pageHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percentage =
    (window.scrollY /
      Math.max(pageHeight, 1)) *
    100;

  if (progress) {
    progress.style.width =
      `${percentage}%`;
  }
}

window.addEventListener(
  "scroll",
  updateProgress,
  { passive:true }
);


const cursorGlow =
  $(".cursor-glow");

if (cursorGlow){

  window.addEventListener(
    "pointermove",
    (event) => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    },
    { passive:true }
  );
}

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ){

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );
          }

        }
      );

    },
    {
      threshold:.12
    }
  );

$$(".reveal").forEach(
  element =>
    observer.observe(element)
);


const grid =
  $("#projectsGrid");

function renderProjects(
  filter = "all"
){

  if (!grid) return;

  const list =
    filter === "all"
      ? projects
      : projects.filter(
          project =>
            project.cat === filter
        );

  grid.innerHTML =
    list.map(
      project => `

        <article
          class="project-card reveal visible"
          data-id="${project.id}"
        >

          <span class="project-number">
            ${project.num} / ${project.cat}
          </span>

          <h3>
            ${project.title}
          </h3>

          <p>
            ${project.desc}
          </p>

          <span class="arrow">
            ↗
          </span>

        </article>

      `
    ).join("");


  $$(".project-card")
    .forEach(
      card => {

        card.addEventListener(
          "click",
          () =>
            openProject(
              card.dataset.id
            )
        );

      }
    );
}

renderProjects();


$$(".filter").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        $$(".filter")
          .forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );

        button.classList.add(
          "active"
        );

        renderProjects(
          button.dataset.filter
        );

      }
    );

  }
);


const modal =
  $("#projectModal");

function openProject(id){

  const project =
    projects.find(
      item => item.id === id
    );

  if (!project || !modal){
    return;
  }

  $("#modalTag").textContent =
    project.tag;

  $("#modalTitle").textContent =
    project.title;

  $("#modalText").textContent =
    project.body;

  $("#modalBullets").innerHTML =
    project.bullets
      .map(
        item =>
          `<li>${item}</li>`
      )
      .join("");

  const repository =
    project.url
      ? `
        <a
          class="btn btn-primary"
          href="${project.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open repository ↗
        </a>
      `
      : "";

  $("#modalLinks").innerHTML = `

    ${repository}

    <button
      class="btn btn-secondary"
      onclick="closeModal()"
    >
      Close
    </button>

  `;

  modal.classList.add("open");

  document.body.style.overflow =
    "hidden";
}


function closeModal(){

  if (!modal) return;

  modal.classList.remove(
    "open"
  );

  document.body.style.overflow =
    "";
}

window.closeModal =
  closeModal;


const closeModalButton =
  $("#closeModal");

if (closeModalButton){

  closeModalButton.addEventListener(
    "click",
    closeModal
  );
}


if (modal){

  modal.addEventListener(
    "click",
    (event) => {

      if (
        event.target === modal
      ){
        closeModal();
      }

    }
  );
}

const menuBtn =
  $("#menuBtn");

if (menuBtn){

  menuBtn.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "nav-open"
      );

    }
  );
}


$$(".navlinks a")
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          document.body.classList.remove(
            "nav-open"
          );

        }
      );

    }
  );
window.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ){

      closeModal();

      document.body.classList.remove(
        "nav-open"
      );

    }

  }
);


const canvas =
  document.createElement("canvas");

canvas.id =
  "webgl";

canvas.style.position =
  "fixed";

canvas.style.inset =
  "0";

canvas.style.width =
  "100%";

canvas.style.height =
  "100%";

canvas.style.pointerEvents =
  "none";

canvas.style.zIndex =
  "-3";

document.body.prepend(
  canvas
);


const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (
  !reduceMotion &&
  window.THREE
){

  const scene =
    new THREE.Scene();


  const camera =
    new THREE.PerspectiveCamera(
      45,
      window.innerWidth /
        window.innerHeight,
      .1,
      100
    );


  camera.position.z =
    6;


  const renderer =
    new THREE.WebGLRenderer({
      canvas,
      alpha:true,
      antialias:true
    });


  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      1.7
    )
  );


  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );
  const particleGroup =
    new THREE.Group();

  scene.add(
    particleGroup
  );


  const count =
    window.innerWidth < 700
      ? 550
      : 950;


  const positions =
    new Float32Array(
      count * 3
    );


  for (
    let i = 0;
    i < count;
    i++
  ){

    const radius =
      2.4 +
      Math.random() * 2.8;

    const angle =
      Math.random() *
      Math.PI *
      2;

    const height =
      (Math.random() - .5) *
      4.5;


    positions[i * 3] =
      Math.cos(angle) *
      radius;

    positions[i * 3 + 1] =
      height;

    positions[i * 3 + 2] =
      Math.sin(angle) *
      radius;

  }


  const geometry =
    new THREE.BufferGeometry();


  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );


  const material =
    new THREE.PointsMaterial({

      color:0x4f9ce8,

      size:
        window.innerWidth < 700
          ? .025
          : .018,

      transparent:true,

      opacity:.34,

      blending:
        THREE.AdditiveBlending

    });


  const points =
    new THREE.Points(
      geometry,
      material
    );


  particleGroup.add(
    points
  );

  const ringMaterial =
    new THREE.MeshBasicMaterial({

      color:0x3c8edc,

      transparent:true,

      opacity:.16

    });


  const ringOne =
    new THREE.Mesh(
      new THREE.TorusGeometry(
        2.2,
        .008,
        16,
        180
      ),
      ringMaterial
    );


  const ringTwo =
    new THREE.Mesh(
      new THREE.TorusGeometry(
        1.75,
        .006,
        16,
        180
      ),
      new THREE.MeshBasicMaterial({

        color:0x8ab9e8,

        transparent:true,

        opacity:.10

      })
    );


  ringOne.rotation.x =
    .9;

  ringOne.rotation.y =
    .35;

  ringTwo.rotation.x =
    -.7;

  ringTwo.rotation.y =
    .6;


  particleGroup.add(
    ringOne,
    ringTwo
  );


  let targetX = 0;
  let targetY = 0;

  window.addEventListener(
    "pointermove",
    (event) => {

      targetX =
        (
          event.clientX /
          window.innerWidth -
          .5
        ) * .35;

      targetY =
        (
          event.clientY /
          window.innerHeight -
          .5
        ) * .2;

    },
    { passive:true }
  );

  function animate(time){

    requestAnimationFrame(
      animate
    );


    particleGroup.rotation.y +=
      (
        targetX -
        particleGroup.rotation.y
      ) * .01;


    particleGroup.rotation.x +=
      (
        targetY -
        particleGroup.rotation.x
      ) * .01;


    points.rotation.y =
      time * .000025;


    ringOne.rotation.z =
      time * .00008;


    ringTwo.rotation.z =
      -time * .000055;


    renderer.render(
      scene,
      camera
    );

  }


  animate(0);

  window.addEventListener(
    "resize",
    () => {

      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

    },
    { passive:true }
  );

}