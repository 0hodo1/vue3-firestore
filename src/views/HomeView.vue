<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { firestoreRef } from "../firebase/config";

export default {
  name: "HomeView",
  setup() {
    onMounted(async () => {
      // let res = await firestoreRef.collection("personels").get();
      // res.forEach((doc) => {
      //   console.log(doc.data());
      // });

      // let res = await firestoreRef
      //   .collection("personels")
      //   .doc("Br5wiFCqFeTT6nlMeQjI")
      //   .get();
      // console.log(res.exists);

      // let personelObject = {
      //   name: "Ahmet",
      //   role: "user",
      //   age: 25,
      // };
      // let res = await firestoreRef.collection("personels").add(personelObject);
      // console.log(res);

      // delete Document
      // await firestoreRef
      //   .collection("personels")
      //   .doc("Br5wiFCqFeTT6nlMeQjI")
      //   .delete();

      // update Document (data update ederken daha önceki verileri varsa günceller yoksa bir şey yapmaz)
      // await firestoreRef
      //   .collection("personels")
      //   .doc("qkniCpLoxzIbgjUKRF62")
      //   .update({
      //     name: "omer",
      //     role: "user",
      //     city: "İstanbul",
      //   });

      // set Document (data set ederken daha önceki verileri siler)
      await firestoreRef
        .collection("personels")
        .doc("qkniCpLoxzIbgjUKRF62")
        .set({
          city: "İstanbul",
        });
    });
  },
};
</script>
