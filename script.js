const btn = document.querySelector(".btn"),
nama = document.querySelector(".nama"),
npm = document.querySelector(".npm"),
tmpt = document.querySelector(".tmpt"),
validasiNama = document.querySelector(".validasiNama"),
validasiNpm = document.querySelector(".validasiNpm"),
validasiTmpt = document.querySelector(".validasiTmpt"),
validasiJurusan = document.querySelector(".validasiJurusan"),
validasiAgama = document.querySelector(".validasiAgama"),
validasiAlamat = document.querySelector(".validasiAlamat"),
agama = document.querySelector(".agama"),
jurusan = document.querySelector(".jurusan"),
tgl = document.querySelector(".tgl"),
jenisKelamin = document.getElementsByTagName("jenisKelamin"),
hobi = document.getElementsByTagName("hobi"),
alamat = document.querySelector(".alamat");

btn.addEventListener("click", () => {
    nilai = 0

    if(nama.value === ""){
        validasiNama.style.color = "#FC2626";
        validasiNama.innerText = "Tidak Boleh Kosong";
        setTimeout(()=>{
            hapusValidasinama(); 
        }, 2000);
    }else{
        nilai = 1;
    }
    if(npm.value === ""){
        validasiNpm.style.color = "#FC2626";
        validasiNpm.innerText = "Tidak Boleh Kosong";
        setTimeout(()=>{
            hapusValidasinpm()
        }, 2000);
    }else{
        nilai = 1 + nilai;
    }
    if(tmpt.value === ""){
        validasiTmpt.style.color = "#FC2626";
        validasiTmpt.innerText = "Tidak Boleh Kosong";
        setTimeout(()=>{
            hapusValidasitmpt()
        }, 2000);
    }else{
        nilai = 1 + nilai;
    }
    if(alamat.value === ""){
        validasiAlamat.style.color = "#FC2626";
        validasiAlamat.innerText = "Tidak Boleh Kosong";
        setTimeout(()=>{
            hapusValidasialamat(); 
        }, 2000);
    }else{
        nilai = 1 + nilai;
    }
    if(jurusan.selectedIndex === 0){
        validasiJurusan.style.color = "#FC2626";
        validasiJurusan.innerText = "Pilih jurusan Anda";
        setTimeout(()=>{
            hapusValidasijurusan()
        }, 2000);
    }else{
        nilai = 1 + nilai;
    }
    if(agama.selectedIndex === 0){
        validasiAgama.style.color = "#FC2626";
        validasiAgama.innerText = "Pilih agama Anda";
        setTimeout(()=>{
            hapusValidasiagama()
        }, 2000);
    }else{
        nilai = 1 + nilai;
    }

    var jenis_kelamin = $("input[name=jenisKelamin]:checked").val();
    var hobi = $("input[name=hobi]:checked").val();

    console.log(nilai);
    if(nilai === 6){

        alert(`Nama: ${nama.value} \nNpm: ${npm.value} \nAgama: ${agama.value} \nTempat Lahir: ${tmpt.value} \nTanggal Lahir: ${tgl.value} \nJenis Kelamin: ${jenis_kelamin} \nAlamat: ${alamat.value} \nJurusan: ${jurusan.value} \nHobi: ${hobi}`);
    }
})

function hapusValidasinama(){
    validasiNama.style.display = "none";
}

function hapusValidasinpm(){
    validasiNpm.style.display = "none";
}

function hapusValidasitmpt(){
    validasiTmpt.style.display = "none";
}

function hapusValidasijurusan(){
    validasiJurusan.style.display = "none";
}

function hapusValidasiagama(){
    validasiAgama.style.display = "none";
}

function hapusValidasialamat(){
    validasiAlamat.style.display = "none";
}