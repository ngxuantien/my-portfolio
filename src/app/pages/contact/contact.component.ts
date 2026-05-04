import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactFormModel {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: ContactFormModel = {
    name: '',
    email: '',
    message: '',
  };

  sendMail(): void {
    const subject = `Portfolio Contact from ${this.contactForm.name || 'Visitor'}`;

    const body = `
Name: ${this.contactForm.name}
Email: ${this.contactForm.email}

Message:
${this.contactForm.message}
    `.trim();

    const mailtoLink = `mailto:xuantien24689@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}
