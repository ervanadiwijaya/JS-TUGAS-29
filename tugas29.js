function pglexec() {
    var kal = "Belajar menimba ilmu programming bersama Niomic"
    var word = new RegExp("bersama");

    console.log(word.exec(kal));
}

pglexec();