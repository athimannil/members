import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const members = [
  {
    "id": 1,
    "firstName": "Wade",
    "lastName": "Mcfarland",
    "email": "augue@diamProindolor.net",
    "mobile": "1698020225899",
    "abroadAddress": "122-8750 Sed Av.",
    "nativeAddress": "P.O. Box 655, 3343 Est Rd.",
    "city": "Puerto Octay",
    "postalcode": "126226"
  },
  {
    "id": 2,
    "firstName": "Gloria",
    "lastName": "Sellers",
    "email": "Donec@tristiqueaceleifend.org",
    "mobile": "1626042776499",
    "abroadAddress": "1910 Donec Ave",
    "nativeAddress": "Ap #143-2031 Dui St.",
    "city": "Onoz",
    "postalcode": "708257"
  },
  {
    "id": 3,
    "firstName": "Chantale",
    "lastName": "Baird",
    "email": "orci@enimEtiamimperdiet.net",
    "mobile": "1634101577299",
    "abroadAddress": "3042 Adipiscing, Av.",
    "nativeAddress": "Ap #571-8333 Fusce Ave",
    "city": "Zelzate",
    "postalcode": "619338"
  },
  {
    "id": 4,
    "firstName": "Clio",
    "lastName": "Campbell",
    "email": "ornare@pellentesque.com",
    "mobile": "1692032554999",
    "abroadAddress": "322 Dolor. Ave",
    "nativeAddress": "Ap #246-1737 Elit Street",
    "city": "Memphis",
    "postalcode": "266466"
  },
  {
    "id": 5,
    "firstName": "Byron",
    "lastName": "Sanchez",
    "email": "non.hendrerit@nuncsedpede.org",
    "mobile": "1616100144099",
    "abroadAddress": "P.O. Box 564, 131 Porttitor Rd.",
    "nativeAddress": "Ap #328-7655 Enim. Av.",
    "city": "Gentinnes",
    "postalcode": "949099"
  },
  {
    "id": 6,
    "firstName": "Charity",
    "lastName": "Monroe",
    "email": "velit.eget.laoreet@porttitorvulputate.net",
    "mobile": "1628031885799",
    "abroadAddress": "434-5484 Vel, Street",
    "nativeAddress": "Ap #225-756 Scelerisque St.",
    "city": "Dipignano",
    "postalcode": "684591"
  },
  {
    "id": 7,
    "firstName": "Reuben",
    "lastName": "Marks",
    "email": "tristique.senectus@enim.com",
    "mobile": "1690070322799",
    "abroadAddress": "422-8873 Ipsum Road",
    "nativeAddress": "Ap #369-9063 Elit. Avenue",
    "city": "Alandur",
    "postalcode": "665431"
  },
  {
    "id": 8,
    "firstName": "Sloane",
    "lastName": "Riddle",
    "email": "diam.Duis@ornare.co.uk",
    "mobile": "1629082552499",
    "abroadAddress": "P.O. Box 166, 4389 Cum St.",
    "nativeAddress": "933-1975 Cursus Road",
    "city": "Oliver",
    "postalcode": "280041"
  },
  {
    "id": 9,
    "firstName": "Elliott",
    "lastName": "Ware",
    "email": "sagittis@eratSednunc.com",
    "mobile": "1645061876599",
    "abroadAddress": "P.O. Box 126, 7298 Sit St.",
    "nativeAddress": "Ap #982-5384 Aliquam Rd.",
    "city": "San Giovanni Suergiu",
    "postalcode": "127451"
  },
  {
    "id": 10,
    "firstName": "Bryar",
    "lastName": "Kirk",
    "email": "sodales.purus@ultricesposuerecubilia.co.uk",
    "mobile": "1643040147899",
    "abroadAddress": "210-5482 Ullamcorper, Street",
    "nativeAddress": "913-5484 Magnis Rd.",
    "city": "Borghetto di Borbera",
    "postalcode": "974901"
  },
  {
    "id": 11,
    "firstName": "Addison",
    "lastName": "Erickson",
    "email": "tempor.bibendum@vel.org",
    "mobile": "1635060611899",
    "abroadAddress": "9972 Neque. St.",
    "nativeAddress": "P.O. Box 634, 7722 Vivamus Rd.",
    "city": "LaSalle",
    "postalcode": "975086"
  },
  {
    "id": 12,
    "firstName": "Oleg",
    "lastName": "Cochran",
    "email": "dis.parturient.montes@Nullam.edu",
    "mobile": "1618110449999",
    "abroadAddress": "9537 Eu Avenue",
    "nativeAddress": "P.O. Box 405, 3838 Proin Rd.",
    "city": "VTM",
    "postalcode": "500437"
  },
  {
    "id": 13,
    "firstName": "Cain",
    "lastName": "Strickland",
    "email": "pharetra.ut@sapien.ca",
    "mobile": "1685052192099",
    "abroadAddress": "Ap #446-6592 Vivamus Road",
    "nativeAddress": "P.O. Box 280, 3470 Mauris Rd.",
    "city": "Rocca d'Arce",
    "postalcode": "304750"
  },
  {
    "id": 14,
    "firstName": "Ryder",
    "lastName": "Castillo",
    "email": "pede.ac@elitpretium.ca",
    "mobile": "1624110563899",
    "abroadAddress": "718-7818 Eget Street",
    "nativeAddress": "P.O. Box 133, 6760 Cursus Avenue",
    "city": "Frankenthal",
    "postalcode": "245550"
  },
  {
    "id": 15,
    "firstName": "Keith",
    "lastName": "Woods",
    "email": "montes@Duismienim.co.uk",
    "mobile": "1687041573699",
    "abroadAddress": "Ap #779-3451 Ac Rd.",
    "nativeAddress": "P.O. Box 954, 2070 Aliquam Street",
    "city": "Agen",
    "postalcode": "842465"
  },
  {
    "id": 16,
    "firstName": "Ivor",
    "lastName": "Gray",
    "email": "feugiat.non.lobortis@etcommodoat.com",
    "mobile": "1672051667299",
    "abroadAddress": "Ap #623-4174 Posuere Avenue",
    "nativeAddress": "1703 Nulla Rd.",
    "city": "Afsnee",
    "postalcode": "749228"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (member) => {
  // return replaceAll(member.title, ' ', '-');
  return replaceAll(member.firstName, ' ', '-');
};

class MemberApi {
  static getAllMembers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], members));
      }, delay);
    });
  }

  static saveMember(member) {
    member = Object.assign({}, member); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minMemberTitleLength = 1;
        if (member.firstName.length < minMemberTitleLength) {
          reject(`Title must be at least ${minMemberTitleLength} characters.`);
        }

        if (member.id) {
          const existingMemberIndex = members.findIndex(a => a.id == member.id);
          members.splice(existingMemberIndex, 1, member);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new members in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          member.id = generateId(member);
          // member.watchHref = `http://www.pluralsight.com/members/${member.id}`;
          members.push(member);
        }
console.log(member);
        resolve(member);
      }, delay);
    });
  }

  static deleteMember(memberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMemberToDelete = members.findIndex(member => {
          member.id == memberId;
        });
        members.splice(indexOfMemberToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MemberApi;
