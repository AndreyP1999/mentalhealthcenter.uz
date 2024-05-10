export async function sendFile(form: HTMLFormElement) {
    'use client'
    const data = new FormData();
    const host = window.location.origin
    data.set("FileName", form.text.value)
    data.set("thisFile", form.file.files[0]);
    data.set("description", form.description.value);
    data.set("language", form.language.value);


    const res = await fetch(`${host}/adminPanel/api/Patients/`, {
        body: data,


        method: "post",
    })

   


    const body = await res.json();
    if (body.status > 299) {
        console.log("error", body)
    }
    else {
        alert("success")
    }
}