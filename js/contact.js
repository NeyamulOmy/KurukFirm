const sendMail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.msg_subject.value;
    const message = form.message.value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "neyamul.omy@gmail.com",
        Password: "B8A866E5D1D6A7CAEEE0F70D3A87699A1511",
        To: 'neyamul.omy.17@gmail.com',
        From: "neyamul.omy@gmail.com",
        Subject: `${subject}`,
        Body: `<strong>Name:</strong> ${name} <br/><strong>Email:</strong> ${email}<br/><strong>Subject:</strong> ${subject}<br/><strong>Message:</strong> ${message}`
    }).then(
        message => {
            switch (message) {
                case 'OK':
                    Swal.fire({
                        title: "Success!",
                        text: "Your message was sent successfully",
                        icon: "success"
                    })
                    break;

                default:
                    Swal.fire({
                        title: "Error!",
                        text: message,
                        icon: "error"
                    })
                    break;
            }
            form.reset();
        }

    );
}
