import { Component } from '@angular/core';
import { HomeComponent } from "../../pages/home/home.component";
import { AboutComponent } from "../../pages/about/about.component";
import { ProjectsComponent } from "../../pages/projects/projects.component";
import { SkillsComponent } from "../../pages/skills/skills.component";
import { ContactComponent } from "../../pages/contact/contact.component"; 
import { ExperienceComponent } from "../../pages/experience/experience.component";
import { FooterComponent } from "../../shared/component/footer/footer.component";
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";

@Component({
  selector: 'app-main-layout',
  imports: [HomeComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent, ExperienceComponent, FooterComponent, NavbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
