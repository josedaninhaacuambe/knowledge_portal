import React from "react";
import { Link } from "react-router-dom";

export const normaHeader = [
  {
    name: "NORMA",
    selector: (row) => row.name,
    format: row => `${row.name.slice(0, 200)}`,
    sortable: true,
    style: {
      backgroundColor: 'rgb(71 68 58)',
      color: 'white',
      maxWidth: '200px!important',
    },
  },
  {
    name: "DESCRIÇÃO",
    selector: (row) => row.description,
    wrap: true,
    format: row => `${row.description.slice(0, 200)}...`,
    sortable: true,
  },
  {
    name: "",
    selector: (row) => row.type,
    sortable: false,
    cell: (d) => (
        <p>
          <p className="uk-visible@m" uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf" style={{ borderRadius:20 }}>
                <Link
                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                    to="/viewPdf"
                    state={d}
                    >
                    <span>visualizar</span>
                </Link>
            </a>
          </p>

          <p className="uk-hidden@m" uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf" style={{ borderRadius:20 }}>
                <Link
                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                    to="/viewPdf"
                    state={d}
                    >
                    <span>ver</span>
                </Link>
            </a>
          </p>
        </p>

          ),
  },
];


export const projectoHeader = [
 {
     name: "Nr",
     selector: (row) => row.nr,
     sortable: true,
     style: {
       backgroundColor: 'rgb(71 68 58)',
       color: 'white',
       maxWidth: '5px!important',
     },
  },
  {
    name: "NOME",
    selector: (row) => row.name,
    sortable: true,
    format: row => `${row.name.slice(0, 200)}`,
     style: {
       maxWidth: '200px!important',
     },

  },
  {
    name: "DESEMPENHO",
    selector: (row) => row.nivel_desempenho,
    wrap: true,
    // format: row => `${row.nivel_desempenho.slice(0, 200)}...`,
    // sortable: true,
     style: {
       maxWidth: '10px!important',

     },
  },

  {
    name: "PONTO DE SITUAÇÃO",
    selector: (row) => row.ponto_de_situacao,
    wrap: true,
    // format: row => `${row.ponto_de_situacao.slice(0, 100)}...`,
    // sortable: true,
    style: {
     },
  },

 // {
 //   name: "CONSTRANGIMENTOS",
 //   selector: (row) => row.constrangimentos,
 //   wrap: true,
 //   format: row => `${row.constrangimentos.slice(0, 200)}...`,
 //   sortable: true,
 // },
];

export const TrainingHeader = [

  {
    name: "",
    selector: (row) => row.nome,
    sortable: true,
    format: row => `${row.nome.slice(0, 10)}`,
    sortable: true,
    style: {
      backgroundColor: 'rgb(71 68 58)',
      color: 'white',
      maxWidth: '200px!important',
    },
  },
  {
    name: "ANO",
    selector: (row) => row.email ,
    sortable: true,
    format: row => `${row.email.slice(0, 200)}`,
    style: {
          backgroundColor: 'rgb(71 68 58)',
          color: 'white',
          maxWidth: '20px!important',
        },
  },
  {
    name: "LEGISLAÇÃO",
    selector: (row) => row.telefone,
  },

  {
    name: "DESCRIÇÃO",
    selector: (row) => row.endereco,
    wrap: true,
    format: row => `${row.endereco.slice(0, 100)}...`,
    sortable: true,
  },

  {
    name: "",
    selector: (row) => row.file_name,
    sortable: false,
    style: {
    },
    cell: (d) => (
      <p>
                <p className="uk-visible@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf3" style={{ borderRadius:20 }}>
                <Link
                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                    to="/viewPdf3"
                    state={d}
                    >
                    <span>visualizar</span>
                </Link>
            </a>
          </p>
        </p>
        <p className="uk-hidden@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf3" style={{ borderRadius:20 }}>
                <Link
                  className="uk-button uk-text-capitalize uk-padding-remove uk-margin-remove uk-button-small uk-margin-small-right"
                  to="/viewPdf3"
                  state={d}
                >
                  <span>ver</span>
                </Link>
            </a>
          </p>
        </p>
      </p>
    ),
  },

];

export const legislacaoHeader = [
  // {
  //   name: "",
  //   selector: (row) => row.type,
  //   sortable: true,
  //   format: row => `${row.type.slice(0, 10)}`,
  //   sortable: true,
  //   style: {
  //     backgroundColor: 'rgb(71 68 58)',
  //     color: 'white',
  //     maxWidth: '200px!important',
  //   },
  // },
  {
    name: "ANO",
    selector: (row) => row.year,
    sortable: true,
    format: row => `${row.year.slice(0, 200)}`,
    style: {
          backgroundColor: 'rgb(71 68 58)',
          color: 'white',
          maxWidth: '20px!important',
        },
  },
  {
    name: "LEGISLAÇÃO",
    selector: (row) => row.name,
  },

  {
    name: "DESCRIÇÃO",
    selector: (row) => row.description,
    wrap: true,
    format: row => `${row.description.slice(0, 100)}...`,
    sortable: true,
  },

  {
    name: "",
    selector: (row) => row.file_name,
    sortable: false,
    style: {
    },
    cell: (d) => (
      <p>
                <p className="uk-visible@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf3" style={{ borderRadius:20 }}>
                <Link
                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                    to="/viewPdf3"
                    state={d}
                    >
                    <span>visualizar</span>
                </Link>
            </a>
          </p>
        </p>
        <p className="uk-hidden@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf3" style={{ borderRadius:20 }}>
                <Link
                  className="uk-button uk-text-capitalize uk-padding-remove uk-margin-remove uk-button-small uk-margin-small-right"
                  to="/viewPdf3"
                  state={d}
                >
                  <span>ver</span>
                </Link>
            </a>
          </p>
        </p>
      </p>
    ),
  },

];

export const booksHeader = [
  {
    name: "author",
    selector: (row) => row.author,
    sortable: true,
    format: row => `${row.author.slice(0, 200)}`,
    style: {
      backgroundColor: 'rgb(71 68 58)',
      color: 'white',
      maxWidth: '200px!important',
    },
  },
  // {
  //   name: "subject",
  //   selector: (row) => row.subject,
  //   sortable: true,
  //   format: row => `${row.subject.slice(0, 200)}`,
  //   style: {
  //         backgroundColor: 'rgb(71 68 58)',
  //         color: 'white',
  //         maxWidth: '20px!important',
  //       },
  // },
  {
    name: "subject",
    selector: (row) => row.subject,
    sortable: true,
    wrap: true,  
    format: row => `${row.subject.slice(0, 400)}`,
    style: {
      maxWidth: '400px!important',
    },

  },
  {
    name: "descrition",
    selector: (row) => row.description,
    wrap: true,
    format: row => `${row.description.slice(0, 100)}...`,
    sortable: true,
//    style: {
//      fontFamily: "sans-serif", 
//      fontWeight: '300',
//      fontSize: '14px',
//      Text: 'justify',
//      TextDecoder: 'justify',
//    },
  },

  {
    name: "",
    selector: (row) => row.file_name,
    sortable: false,
    style: {
    },
    cell: (d) => (
      <p>
        <p className="uk-visible@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf3" style={{ borderRadius:20 }}>
                <Link
                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                    to="/viewPdf7"
                    state={d}
                    >
                    <span>visualizar</span>
                </Link>
            </a>
          </p>
        </p>
        <p className="uk-hidden@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf3" style={{ borderRadius:20 }}>
                <Link
                  className="uk-button uk-text-capitalize uk-padding-remove uk-margin-remove uk-button-small uk-margin-small-right"
                  to="/viewPdf3"
                  state={d}
                >
                  <span>ver</span>
                </Link>
            </a>
          </p>
        </p>
      </p>
    ),
  },

];



export const ordemHeader = [
  {
    name: "NR",
    selector: (row) => row.code,
    sortable: true,
    format: row => `${row.code.slice(0, 300)}`,
    sortable: true,
    style: {
      backgroundColor: 'rgb(71 68 58)',
      color: 'white',
      maxWidth: '200px!important',
    },

  },
  {
    name: "ASSUNTO",
    selector: (row) => row.name,
    sortable: true,
    wrap: true,  
    format: row => `${row.name.slice(0, 400)}`,
    style: {
      maxWidth: '400px!important',
    },
  },
 // {
 //   name: "DESCRIÇÃO",
 //   selector: (row) => row.description,
 //   sortable: true,
 //   wrap: true,
 //   format: row => `${row.description.slice(0, 250)}...`,
 // },
  {
    name: "ACÇÃO",
    selector: (row) => row.file_name,
    style: {
      color: 'white',
      paddingLeft: '100px', // override the cell padding for data cells
      paddingRight: '0px',
      paddingTop: '10px',
      marginLeft: '100px',
    },
    sortable: false,
    cell: (d) => (
      <p>
        <p className="uk-visible@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf1" style={{ borderRadius:20 }}>
                <Link
                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                    to="/viewPdf1"
                    state={d}
                    >
                    <span>visualizar</span>
                </Link>
            </a>
          </p>
        </p>
        <p className="uk-hidden@m">
          <p uk-margin>
            <a class="uk-button uk-margin-top uk-text-center uk-button-default" href="/viewPdf1" style={{ borderRadius:20 }}>
                <Link
                  className="uk-button uk-text-capitalize uk-padding-remove uk-margin-remove uk-button-small uk-margin-small-right"
                  to="/viewPdf1"
                  state={d}
                >
                  <span>ver</span>
                </Link>
            </a>
          </p>
        </p>
      </p>
    ),
    // ignoreRowClick: true,
    // allowOverflow: true,
    // button: true,
  },

];



export const usersHeader = [
    {
      name: "NOME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "USUÁRIO",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "FUNÇÃO",
      selector: (row) => row.role,
      sortable: true,
    },{
      name: "ULTIMO ACESSO",
      selector: (row) => row.last_login,
      sortable: true,
    },
    {
      name: "DETALHES",
      selector: (row) => row.type,
      sortable: false,
      cell: (d) => (
        <p>
          <Link
            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
            to="#"
            state={d}
          >
            <span uk-icon="icon: arrow-right; ratio: 1.2"></span>
          </Link>
        </p>
      ),
    },
];  

export default function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [day, month, year, ].join('-');
  }