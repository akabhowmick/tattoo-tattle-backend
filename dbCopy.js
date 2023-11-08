import bcrypt from "bcryptjs";
const encryptPassword = (password) => {
  return bcrypt.hash(password, 11);
};

export const db_reseed = {
  clients: [
    {
      firstName: "Amelia",
      lastName: "Boyer",
      email: "11@gmail.com",
      password: await encryptPassword("q6SkzEUExkRAe12@"),
      phoneNumber: "+1 862 307 5785",
      type: "Client",
    },
    {
      firstName: "Lacey",
      lastName: "Lang",
      email: "12@gmail.com",
      password: await encryptPassword("qwertASDFG12345!"),
      phoneNumber: "+1 215 278 2969",
      type: "Client",
    },
    {
      firstName: "Hetish",
      lastName: "Kuphal",
      email: "13@gmail.com",
      password: await encryptPassword("Qwerasdf12!"),
      phoneNumber: "+1 966 886 9670",
      type: "Client",
    },
    {
      firstName: "Ameles",
      lastName: "Bor",
      email: "14@gmail.com",
      password: await encryptPassword("q6SkzEUExkRAe12@"),
      phoneNumber: "+1 862 307 5785",
      type: "Client",
    },
    {
      firstName: "Lacywe",
      lastName: "Langer",
      email: "15@gmail.com",
      password: await encryptPassword("qwertASDFG12345!"),
      phoneNumber: "+1 215 278 2969",
      type: "Client",
    },
    {
      firstName: "Hettie",
      lastName: "Kuphal",
      email: "16@gmail.com",
      password: await encryptPassword("Qwerasdf12!"),
      phoneNumber: "+1 966 886 9670",
      type: "Client",
    },
  ],
  artists: [
    {
      firstName: "Vergie",
      lastName: "Schuster",
      email: "art1@gmail.com",
      password: await encryptPassword("vWKJvVJLa!Qa1"),
      phoneNumber: "+1 312 341 2312",
      statesLocation: "AS,AK,AR,AL",
      tattooStyles: "Watercolor,Blackwork",
      type: "Artist",
    },
    {
      firstName: "Jacky",
      lastName: "Nienow",
      email: "art2@gmail.com",
      password: await encryptPassword("bncsHEBF833d_lB"),
      phoneNumber: "+1 688 292 4953",
      statesLocation: "AZ,AS,CA",
      tattooStyles: "Tribal,Watercolor,Blackwork",
      type: "Artist",
    },
    {
      firstName: "Peyton",
      lastName: "O'Conner",
      email: "art3@gmail.com",
      password: await encryptPassword("2e_ywuMdvSUqcGG"),
      phoneNumber: "+1 618 802 1460",
      statesLocation: "UM,VT,VA,VI",
      tattooStyles: "Portrait,3D",
      type: "Artist",
    },
    {
      firstName: "Wanda",
      lastName: "Walker",
      email: "art4@gmail.com",
      password: await encryptPassword("Qwas1234!"),
      phoneNumber: "+1 538 826 3816",
      statesLocation: "NJ,NM,NV,NY",
      tattooStyles: "Geometric,Trash Polka,Japanese",
      type: "Artist",
    },
    {
      firstName: "Hardy",
      lastName: "Rowe",
      email: "art5@gmail.com",
      password: await encryptPassword("NbdPXHQ2w!"),
      phoneNumber: "+1 928 287 4850",
      statesLocation: "IN,KY,KS",
      tattooStyles: "Blackwork,Realism",
      type: "Artist",
    },
    {
      firstName: "Syble",
      lastName: "Hermiston",
      email: "art6@gmail.com",
      password: await encryptPassword("Qwer12344!"),
      phoneNumber: "+1 989 878 5685",
      statesLocation: "AL,GU,GA,HI,MO,MS",
      tattooStyles: "Fine Line,3D,Patchwork",
      type: "Artist",
    },
    {
      firstName: "Kenyatta",
      lastName: "Kiehn",
      email: "art7@gmail.com",
      password: await encryptPassword("w0KBoOPgEAfO0!"),
      phoneNumber: "+1 447 108 5491",
      statesLocation: "OH,OK,OR,PA,PR,RI",
      tattooStyles: "Fine Line,Old School",
      type: "Artist",
    },
    {
      firstName: "Jamie",
      lastName: "Moore",
      email: "art8@gmail.com",
      password: await encryptPassword("vWKJvVJLa!Qa1"),
      phoneNumber: "+1 765 718 9131",
      statesLocation: "TX,UM,UT,TN,SD,SC",
      tattooStyles: "Old School,Fine Line,Tribal",
      type: "Artist",
    },
    {
      firstName: "Bria",
      lastName: "Frami",
      email: "art9@gmail.com",
      password: await encryptPassword("AriW01L1u!"),
      phoneNumber: "+1 522 557 0570",
      statesLocation: "FL,DE,OR,OK,MS,MP",
      tattooStyles: "Blackwork,Watercolor,Realism",
      type: "Artist",
    },
  ],
  tattoos: [
    {
      artistId: 1,
      title: "Dynamic Identity Architec",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo1.jpg59ad64fa-6778-4cbf-a2a3-baed6bbeddbf?alt=media&token=ac6d8599-1153-4e27-bd84-1063155dbfb7",
      dateCreated: "5/3/2023",
      artistName: "Vergie Schuster",
      description: "Et nihil laboriosam et et enim consectetur ut sed quidem",
      price: 500,
      statesInput: "AK,AR",
      tattooStyleInput: "Watercolor,Blackwork",
    },
    {
      artistId: 1,
      title: "Human Web Administrators",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo2.png685b9bca-aaaa-4344-bf58-b9deb1b4922e?alt=media&token=886e289f-ee71-409a-b5e7-b45c2d7067b4",
      dateCreated: "5/3/2023",
      artistName: "Vergie Schuster",
      description: "Et nihil laboriosam et et enim consectetur ut sed quidem",
      price: 1000,
      statesInput: "AS,AL",
      tattooStyleInput: "Watercolor,Blackwork",
    },
    {
      artistId: 2,
      title: "Internal Identity Develope",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo3.jpga53d8919-f39b-48fc-953f-67f46a7a6a10?alt=media&token=fd978d25-c0d0-4930-ba9d-8570a6d199ad",
      dateCreated: "5/3/2023",
      artistName: "Jacky Nienow",
      description: "Architecto sit sed repellat ipsa",
      price: 1000,
      statesInput: "AZ,AS,CA",
      tattooStyleInput: "Watercolor,Tribal",
    },
    {
      artistId: 2,
      title: "Principal Group Engineers",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo4.jpg8b5f07d0-6019-4071-b09a-f5ee25e9e82c?alt=media&token=2cc44625-db08-4743-bed7-0eabb52c664c",
      dateCreated: "5/3/2023",
      artistName: "Jacky Nienow",
      description: "Et eos non est molestias est quia blanditiis debitis",
      price: 1001,
      statesInput: "AZ,AS,CA",
      tattooStyleInput: "Watercolor,Blackwork",
    },
    {
      artistId: 3,
      title: "Facilis et qui commodi",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo6.pngcc2ed2d5-423f-46c0-b097-05713b310923?alt=media&token=3ab751be-321e-4c82-a5cd-195d43d4d8a1",
      dateCreated: "5/4/2023",
      artistName: "Peyton O'Conner",
      description: "Impedit blanditiis quasi ab nemo distinctio et optio",
      price: 1000,
      statesInput: "UM,VT,VA",
      tattooStyleInput: "Portrait,3D",
    },
    {
      artistId: 3,
      title: "Molestias et quia",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo5.pngb482b968-bced-497f-ac03-2e4443a8f2bb?alt=media&token=f8c586cb-9844-4949-b8b3-0ed620a4e462",
      dateCreated: "5/4/2023",
      artistName: "Peyton O'Conner",
      description:
        "Est autem dolorem quidem et iusto consequatur veritatis eos dicta. Quos cum sed laborum provident voluptatibus autem. Ducimus dolorum architecto.",
      price: 1001,
      statesInput: "VI,VA",
      tattooStyleInput: "Portrait",
    },
    {
      artistId: 3,
      title: "Aut praesentium",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo7.pngc77639f6-c029-48bb-88f9-b204b91ce506?alt=media&token=cdb29cb2-7582-4325-a161-7336a39e4323",
      dateCreated: "5/4/2023",
      artistName: "Peyton O'Conner",
      description:
        "Quas in eaque voluptates sed alias voluptatum dolores ea. ipsa et laboriosam placeat suscipit quaerat facilis. Amet est quod exercitationem. Qui aperiam quos praesentium sunt inventore consequatur dicta.",
      price: 500,
      statesInput: "UM,VA",
      tattooStyleInput: "3D",
    },
    {
      artistId: 3,
      title: "Mollitia mollitia quaerat cumque",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo9.png49042174-8764-4223-aebb-12a116e30d58?alt=media&token=1ccd8c4f-abfd-4b7a-a7b1-37f98cc347c9",
      dateCreated: "5/4/2023",
      artistName: "Peyton O'Conner",
      description:
        "Doloremque sequi nostrum minus omnis illum animi. Voluptatem numquam mollitia quos similique minus. Culpa dignissimos suscipit consectetur cumque cupiditate saepe dolorem debitis.",
      price: 1001,
      statesInput: "VT,VI",
      tattooStyleInput: "Portrait,3D",
    },
    {
      artistId: 3,
      title: "Libero commodi delectus laboriosam.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo10.pngfe107c5c-1945-4392-833d-8864b1c391ab?alt=media&token=aa23b6e6-818f-47d1-8eb7-d97d6c2578c2",
      dateCreated: "5/4/2023",
      artistName: "Peyton O'Conner",
      description:
        "Pariatur dolore non quis similique qui ducimus et quidem. Dolor dolorem et consequatur illo voluptatem nam dolorem iusto accusamus. Et soluta eveniet aliquam iste exercitationem.",
      price: 500,
      statesInput: "VT,VA,VI",
      tattooStyleInput: "Portrait,3D",
    },
    {
      artistId: 4,
      title: "Libero quidem eos et id modi.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo1.jpgff17421b-8fef-40a4-87ba-c877fda65aa8?alt=media&token=4af7d583-5c06-4934-986e-db8d13743f14",
      dateCreated: "5/4/2023",
      artistName: "Wanda Walker",
      description:
        "Quia aut illum. Neque libero excepturi cupiditate ipsum sapiente. Ratione maiores velit et asperiores ipsam et ullam deleniti.",
      price: 1000,
      statesInput: "NY,NM",
      tattooStyleInput: "Geometric,Japanese",
    },
    {
      artistId: 4,
      title: "Possimus ea nulla",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo2.png412173ed-85d9-4277-88cd-d47e995532e2?alt=media&token=38730c39-2be9-4bb4-827e-9662e706eb1c",
      dateCreated: "5/4/2023",
      artistName: "Wanda Walker",
      description:
        "Eveniet ea est cupiditate qui ut quidem. mollitia placeat voluptas rerum. Omnis iste culpa optio vero sint quibusdam. Delectus odit et.",
      price: 1000,
      statesInput: "NJ,NM,NY",
      tattooStyleInput: "Geometric,Trash Polka",
    },
    {
      artistId: 4,
      title: "Blanditiis ea adipisci.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo3.jpg8db2f2ee-d77a-458a-b72c-5f26ee83b997?alt=media&token=1a61b70a-aa01-47a4-b20a-11fc850b46d9",
      dateCreated: "5/4/2023",
      artistName: "Wanda Walker",
      description:
        "Maxime in dolores officiis unde. Ipsam debitis et sint. Corporis quod molestiae.",
      price: 1000,
      statesInput: "NV,NM",
      tattooStyleInput: "Trash Polka,Japanese",
    },
    {
      artistId: 4,
      title: "Ipsam odit omnis ullam sequi veniam.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo4.jpg497f5f56-ba0a-4d70-a6c6-542d6ca70317?alt=media&token=74834f4a-fc8d-4cdc-815d-df35a6466231",
      dateCreated: "5/4/2023",
      artistName: "Wanda Walker",
      description:
        "Sunt quisquam laboriosam eum sit laudantium vero. Dignissimos aperiam praesentium ea autem. Blanditiis et beatae sed in quibusdam occaecati qui.",
      price: 100,
      statesInput: "NY,NV",
      tattooStyleInput: "Geometric",
    },
    {
      artistId: 4,
      title: "Deserunt quia et suscipit quis",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo5.pngcd00e4fa-a6fe-487e-91d4-c38e91d07bd7?alt=media&token=c598468f-843c-4d7a-9b86-437f6a1e1639",
      dateCreated: "5/4/2023",
      artistName: "Wanda Walker",
      description:
        "Molestiae distinctio natus nobis quidem sunt voluptatem sed. quo dolorem et reiciendis eos. Fugiat non at ipsa voluptas. Eligendi saepe ab natus.",
      price: 500,
      statesInput: "NM,NV",
      tattooStyleInput: "Trash Polka,Japanese",
    },
    {
      artistId: 4,
      title: "Aut excepturi voluptates molestiae",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo6.png43ae24d8-04d6-4722-893c-47fc5955688a?alt=media&token=b1028b36-a279-4a9d-bb35-4f05c9bb3856",
      dateCreated: "5/4/2023",
      artistName: "Wanda Walker",
      description:
        "Et libero assumenda et dolore reprehenderit rerum ea sed omnis aut. Sed ab omnis non voluptatibus in. Voluptatum aut minima qui occaecati.",
      price: 1000,
      statesInput: "NJ,NM",
      tattooStyleInput: "Geometric,Japanese",
    },
    {
      artistId: 5,
      title: "Sit praesentium consequatur",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo8.png0b94a514-ef8b-4bdb-897b-4fd8dd2d8b4b?alt=media&token=1802c925-6fcf-4d48-9188-37437424d74f",
      dateCreated: "5/4/2023",
      artistName: "Hardy Rowe",
      description:
        "Possimus aut nam dolorem omnis esse porro voluptas. totam nostrum quasi. Occaecati eaque nulla quod necessitatibus et. Ea in aliquid.",
      price: 1000,
      statesInput: "IN,KY,KS",
      tattooStyleInput: "Blackwork,Realism",
    },
    {
      artistId: 5,
      title: "Perferendis perferendis",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo9.pngbb6d9198-a41a-43a9-ab0f-441479276fc6?alt=media&token=5d1452eb-1b16-450a-9f9e-c51d54840d19",
      dateCreated: "5/4/2023",
      artistName: "Hardy Rowe",
      description:
        "Aut aperiam fuga. perferendis deleniti incidunt ex sequi itaque alias fugiat. Rerum sunt unde incidunt dolorum nihil temporibus. Soluta praesentium ipsa et et molestiae.",
      price: 1000,
      statesInput: "KY",
      tattooStyleInput: "Blackwork",
    },
    {
      artistId: 5,
      title: "Labore non praesentium",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo10.png0169ecd7-1a03-464f-a57a-696c3e104a64?alt=media&token=54aea714-547f-401f-ae6e-47a0846deae8",
      dateCreated: "5/4/2023",
      artistName: "Hardy Rowe",
      description:
        "Sed officiis ut minima ratione accusantium aspernatur quod. magni quidem consequuntur laboriosam. Debitis aliquam consequatur et magnam. Natus quia fugiat.",
      price: 1001,
      statesInput: "IN,KS",
      tattooStyleInput: "Blackwork,Realism",
    },
    {
      artistId: 5,
      title: "Rem ut sit corrupti deleniti aut.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo5.png3fc799d3-1ed5-4932-a689-755a32aa5684?alt=media&token=ffb022c9-83e6-4fa3-9827-5ebec1c3923b",
      dateCreated: "5/4/2023",
      artistName: "Hardy Rowe",
      description:
        "Praesentium nobis eaque. Aut aut error provident reprehenderit sint. Iusto voluptatem atque eum autem et in itaque.",
      price: 1000,
      statesInput: "KY,IN",
      tattooStyleInput: "Blackwork",
    },
    {
      artistId: 7,
      title:
        "Minus quasi et cum dolorem reiciendis praesentium animi. Et totam aut. Ipsam hic aspernatur sapiente placeat.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo1.jpg11bd2a8c-e1c8-4c69-905c-956474579a16?alt=media&token=ac844264-7899-40ef-a719-184221d30c77",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Eveniet tenetur cupiditate et et quia.",
      price: 100,
      statesInput: "OH,OR,PR",
      tattooStyleInput: "Fine Line,Old School",
    },
    {
      artistId: 7,
      title:
        "Rerum placeat quo ut sed nulla dolorum error. Totam facilis corrupti dolore. Eveniet ducimus dolorum ad aperiam.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo2.png7409b557-117d-4514-806d-e8410b57b7da?alt=media&token=557a0990-1ec3-4f23-a5c3-dfe5e0cce43c",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Similique a earum voluptatem quam error.",
      price: 100,
      statesInput: "OK,PA,RI",
      tattooStyleInput: "Fine Line,Old School",
    },
    {
      artistId: 7,
      title:
        "Consequatur hic pariatur voluptatibus sit velit fugiat vel dicta molestiae. Dolorum et perferendis incidunt nisi sequi sit aut repellat voluptate. Iste voluptate explicabo iste aliquam amet.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo3.jpg54af956a-4c7c-472d-a427-e939b8583ce5?alt=media&token=13fc0b6d-16ba-4ade-b740-e134de33075c",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Maiores quidem aut odit tenetur qui rerum enim ipsam.",
      price: 100,
      statesInput: "RI,PR,PA",
      tattooStyleInput: "Fine Line",
    },
    {
      artistId: 7,
      title:
        "Molestias enim nesciunt enim consequuntur omnis aperiam et corporis. Deleniti officiis quas quasi. Facere quasi voluptatem quaerat.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo4.jpgcc9e5208-2fbc-41a6-b711-b89c75b099b3?alt=media&token=7dcee9bd-d161-4363-8130-22964e3da85b",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Aut praesentium rem debitis.",
      price: 1000,
      statesInput: "OH,OK,OR",
      tattooStyleInput: "Fine Line",
    },

    {
      artistId: 7,
      title:
        "fuga tempore fuga et quo. Animi occaecati doloribus suscipit. Ut voluptatem ipsam enim eos corrupti quam dolor ut non.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo10.pngd8640599-0f18-430d-89bf-1704c38cd5d6?alt=media&token=317116c1-9da6-4bb3-85a0-c87d27a9b8a8",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Officiis suscipit quis qui.",
      price: 1000,
      statesInput: "OH,OK,OR",
      tattooStyleInput: "Old School",
    },
    {
      artistId: 7,
      title:
        "Quidem esse velit voluptatem dolores natus reiciendis architecto. Vero reiciendis quasi quia in ipsa ut modi excepturi dolores. Nemo voluptatem et corporis ea provident eum nisi.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo9.png54f87127-e214-4d2c-a30d-21e7e4e26f3e?alt=media&token=845b5c60-adff-4dad-9de9-3434f5bd9c1f",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Ex dolores accusantium nesciunt placeat.",
      price: 1000,
      statesInput: "PR,PA,RI",
      tattooStyleInput: "Old School",
    },
    {
      artistId: 7,
      title:
        "Jic pariatur voluptatibus sit velit fugiat vel dicta molestiae. Dolorum et perferendis incidunt nisi sequi sit aut repellat voluptate. Iste voluptate explicabo iste aliquam amet.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo3.jpg54af956a-4c7c-472d-a427-e939b8583ce5?alt=media&token=13fc0b6d-16ba-4ade-b740-e134de33075c",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Maiores quidem aut odit tenetur qui rerum enim ipsam.",
      price: 100,
      statesInput: "RI,PR,PA",
      tattooStyleInput: "Fine Line",
    },
    {
      artistId: 7,
      title:
        "Molestias enim nesciunt enim consequuntur omnis aperiam et corporis. Deleniti officiis quas quasi. Facere quasi voluptatem quaerat.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo4.jpgcc9e5208-2fbc-41a6-b711-b89c75b099b3?alt=media&token=7dcee9bd-d161-4363-8130-22964e3da85b",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Aut praesentium rem debitis.",
      price: 1000,
      statesInput: "OH,OR",
      tattooStyleInput: "Fine Line",
    },
    {
      artistId: 7,
      title:
        "Sapiente fuga tempore fuga et quo. Animi occaecati doloribus suscipit. Ut voluptatem ipsam enim eos corrupti quam dolor ut non.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo10.pngd8640599-0f18-430d-89bf-1704c38cd5d6?alt=media&token=317116c1-9da6-4bb3-85a0-c87d27a9b8a8",
      dateCreated: "5/5/2023",
      artistName: "Kenyatta Kiehn",
      description: "Officiis suscipit quis qui.",
      price: 1000,
      statesInput: "OH,OK,OR",
      tattooStyleInput: "Old School",
    },
    {
      artistId: 8,
      title:
        "Omnis officia voluptatibus autem quibusdam odio. Ipsum dolorum architecto illo qui sunt rem voluptatem ab. Natus unde non earum.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo5.png74be6dac-06d8-4161-8ffe-5dfec1e19730?alt=media&token=a4178408-7261-455b-8ac1-3fc3bece1bfc",
      dateCreated: "5/5/2023",
      artistName: "Jamie Moore",
      description: "In est et esse laborum.",
      price: 100,
      statesInput: "TX,UT,SD",
      tattooStyleInput: "Old School, Fine Line",
    },
    {
      artistId: 8,
      title:
        "Nihil nam porro est optio officia minus cumque natus quia. Ipsam voluptates vero. Omnis est et quia est non quis",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo7.pnga6451d40-bfc7-418f-b060-f631384eda5d?alt=media&token=9c3bca92-a323-419c-9d6a-069f0e6bd6d9",
      dateCreated: "5/5/2023",
      artistName: "Jamie Moore",
      description:
        "Animi autem id.Nihil nam porro est optio officia minus cumque natus quia. Ipsam voluptates vero. Omnis est et quia est non quis.",
      price: 100,
      statesInput: "TN,SD,SC",
      tattooStyleInput: "Fine Line",
    },
    {
      artistId: 8,
      title:
        "Itaque praesentium similique illum. Aliquam et modi vel saepe voluptatem sequi sapiente. Dolorem voluptatem officiis assumenda et molestiae.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo6.png217a4bf4-920a-4bc3-9232-8a83eaf97937?alt=media&token=da1b751c-2b4e-4df7-b34a-eb250817e33b",
      dateCreated: "5/5/2023",
      artistName: "Jamie Moore",
      description: "Sapiente aut ut ab asperiores.",
      price: 500,
      statesInput: "TN",
      tattooStyleInput: "Fine Line",
    },
    {
      artistId: 8,
      title:
        "Dolor omnis vel eos. Omnis velit voluptatum at sed beatae corrupti. Alias impedit eveniet quaerat qui laboriosam quasi error.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Flogin.pngaab91865-7901-45e1-83a9-32e05e16bc1b?alt=media&token=279fb70a-e6b6-4c83-8560-057cb98adc72",
      dateCreated: "5/5/2023",
      artistName: "Jamie Moore",
      description: "Architecto sit corporis incidunt hic et id sint tenetur.",
      price: 500,
      statesInput: "TN",
      tattooStyleInput: "Fine Line",
    },
    {
      artistId: 8,
      title:
        "Ex modi ut vitae. At ipsam eos occaecati itaque consequatur quia molestiae omnis. Tenetur quaerat vel quae sapiente unde pariatur.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Fsignup.jpg68638966-b658-45c3-be3e-00bb7e2e5119?alt=media&token=a5deb78c-578d-487e-954d-bcf6d6f5b9b8",
      dateCreated: "5/5/2023",
      artistName: "Jamie Moore",
      description: "In totam quae aperiam quam sequi qui et dignissimos.",
      price: 100,
      statesInput: "SD,SC",
      tattooStyleInput: "Old School",
    },
    {
      artistId: 9,
      title:
        "Consequuntur temporibus et nostrum sapiente sit odit. Veniam itaque tempore eius voluptatem incidunt et. Dicta enim est recusandae ea sed et et.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo5.png3eefad90-8064-47df-8db9-fcfb960f1110?alt=media&token=b953f199-66c1-45bb-8d97-bf4e6712509f",
      dateCreated: "5/5/2023",
      artistName: "Bria Frami",
      description: "Odit explicabo saepe adipisci quis.",
      price: 100,
      statesInput: "FL,DE,OR",
      tattooStyleInput: "Blackwork,Realism",
    },
    {
      artistId: 9,
      title:
        "Quos dicta et tempore reprehenderit assumenda. Asperiores quis sunt rem explicabo nemo quia eveniet. Dolor dolores inventore repudiandae asperiores est magnam quibusdam ad.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo7.png5f447829-5276-45ec-a474-5eb089b4bc3e?alt=media&token=7eb15c6c-0ec5-4c62-a2aa-cd6468152ce8",
      dateCreated: "5/5/2023",
      artistName: "Bria Frami",
      description: "Est hic ipsum eligendi commodi aut impedit.",
      price: 500,
      statesInput: "OK,MS,MP",
      tattooStyleInput: "Watercolor",
    },
    {
      artistId: 9,
      title:
        "Porro architecto aut. Magni voluptatem nostrum sint blanditiis est dolor. Consequuntur aut velit.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo9.png9f8b41c6-1ddf-453c-9ee2-1de12d2a67ce?alt=media&token=814fbd78-bfec-44e6-9c7b-7a83394f0c8c",
      dateCreated: "5/5/2023",
      artistName: "Bria Frami",
      description:
        "Perferendis possimus ratione minus consequatur nam tempore.",
      price: 500,
      statesInput: "OK,MS,DE",
      tattooStyleInput: "Watercolor",
    },
    {
      artistId: 9,
      title:
        "Voluptatem quasi sed est vel deleniti. Illo dolores consequatur omnis et deserunt voluptatem. Sint nobis quibusdam nihil.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo7.pngae1d2bc9-b335-4523-8d91-02145113c0a5?alt=media&token=b3f7dbc6-7e60-4824-8228-48070c1e7519",
      dateCreated: "5/5/2023",
      artistName: "Bria Frami",
      description: "Incidunt provident et earum.",
      price: 1000,
      statesInput: "MS,DE",
      tattooStyleInput: "Blackwork",
    },
    {
      artistId: 9,
      title:
        "Dolore officiis non rerum quia quis vel ullam esse est. Necessitatibus fugit cupiditate repudiandae. Adipisci neque velit ab.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo10.png1f387d58-9b27-4a71-8d70-b1f0b661e90a?alt=media&token=34eefe58-36f3-4f6b-868a-5c673483a563",
      dateCreated: "5/5/2023",
      artistName: "Bria Frami",
      description: "Ducimus in perspiciatis ex consequuntur veniam.",
      price: 1000,
      statesInput: "OR,DE",
      tattooStyleInput: "Realism",
    },
    {
      artistId: 9,
      title:
        "Sed sed quae natus explicabo quidem modi aut. Id sit ex impedit ut assumenda. Aut asperiores voluptates asperiores quae cum assumenda qui consectetur.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo9.png1a687d54-8432-4a1b-a052-86657a7c13cc?alt=media&token=d6fa4349-2b2c-44a9-8b18-7d9a32e99b7f",
      dateCreated: "5/5/2023",
      artistName: "Bria Frami",
      description: "Libero qui inventore rerum dolores doloribus fugit.",
      price: 500,
      statesInput: "OK,MS",
      tattooStyleInput: "Watercolor",
    },
    {
      artistId: 9,
      title:
        "Id nisi voluptatem quisquam tempore. Expedita ea consequatur. Suscipit alias fugit aut.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tattoo-tattle.appspot.com/o/images%2Ftattoo8.png8274f23c-a685-4089-9bab-1953c66aaf78?alt=media&token=baf3f47a-8af0-44db-ae03-97fb1acdef2b",
      dateCreated: "5/5/2023",
      artistName: "Bria Frami",
      description:
        "Perspiciatis a odio error eligendi et tenetur consectetur atque.",
      price: 1001,
      statesInput: "MS,MP",
      tattooStyleInput: "Blackwork",
    },
  ],
  tattooRequests: [
    {
      clientName: "Amelia Boyer",
      artistName: "Jacky Nienow",
      messageBody: "This design is really great! I would like this!",
      approvalStatus: "Pending",
      tattooOfInterestTitle: "Internal Identity Develope",
      artistId: 2,
      clientId: 1,
    },
    {
      clientName: "Amelia Boyer",
      artistName: "Vergie Schuster",
      messageBody: "Where can I get this in my state? ",
      approvalStatus: "Denied",
      tattooOfInterestTitle: "Human Web Administrators",
      artistId: 1,
      clientId: 1,
    },
    {
      clientName: "Lacey Lang",
      artistName: "Vergie Schuster",
      messageBody:
        "Eos hic iusto vel praesentium necessitatibu ut et reprehenderit minima.",
      approvalStatus: "Accepted",
      tattooOfInterestTitle: "Dynamic Identity Architec",
      artistId: 1,
      clientId: 2,
    },
    {
      clientName: "Lacey Lang",
      artistName: "Jacky Nienow",
      messageBody:
        "Eos hic iusto vel praesentiumnecessitatibus ut et reprehenderit minima.",
      approvalStatus: "Pending",
      tattooOfInterestTitle: "Internal Identity Develope",
      artistId: 2,
      clientId: 2,
    },
    {
      clientName: "Amelia Boyer",
      artistName: "Vergie Schuster",
      messageBody: "This is even really cool!  ",
      approvalStatus: "Pending",
      tattooOfInterestTitle: "Dynamic Identity Architec",
      artistId: 1,
      clientId: 1,
    },
  ],
  favorites: [
    {
      clientId: 1,
      tattooId: 3,
    },
    {
      clientId: 1,
      tattooId: 4,
    },
    {
      clientId: 2,
      tattooId: 1,
    },
    {
      clientId: 2,
      tattooId: 2,
    },
    {
      clientId: 2,
      tattooId: 18,
    },
    {
      clientId: 2,
      tattooId: 14,
    },
    {
      clientId: 2,
      tattooId: 16,
    },
    {
      clientId: 2,
      tattooId: 19,
    },
    {
      clientId: 2,
      tattooId: 5,
    },
  ],
};
