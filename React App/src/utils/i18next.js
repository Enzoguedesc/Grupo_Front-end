import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcomeMessage: "Here, you will have the opportunity to meet the talent, the dedication and creativity of our students, who transform knowledge into practice with an innovative and strategic vision. Each project reflects not only academic learning, but also the application of skills to solve real-world problems, aligned with market demands.",
      welcomeTitle: "Welcome to our digital space dedicated to exploring the projects and portfolios of IBMEC students!",
      aboutButton: "About us",
      detailButton: "Learn more",
      search: "Search",
      contributors: "Contributors",
      tools: "Utilized tools",
      jobs: "Contributors' roles",
      courses: "Courses",
      semester: "Semesters",
      campus: "Campus",
    }
  },
  pt: {
    translation: {
      welcomeMessage: "Aqui, você terá a oportunidade de conhecer o talento, a dedicação e a criatividade de nossos estudantes, que transformam conhecimento em prática com uma visão inovadora e estratégica. Cada projeto reflete não apenas o aprendizado acadêmico, mas também a aplicação de habilidades para resolver problemas do mundo real, alinhados com as exigências do mercado.",
      welcomeTitle: "Bem-vindo ao nosso espaço digital dedicado a explorar os projetos e portfólios dos alunos do IBMEC!",
      aboutButton: "Sobre nós",
      detailButton: "Saiba mais",
      search: "Pesquisar",
      contributors: "Colaboradores",
      tools: "Ferramentas utilizadas",
      jobs: "Papel dos colaboradores",
      courses: "Cursos",
      semester: "Períodos",
      campus: "Unidades",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "pt", // use ptbr if detected lng is not available
    lng: "pt", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;