import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/services/notification';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="c-cUWjlu c-cUWjlu-ihoTsLD-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icHFxNc-css">Innover. Collaborer. Progresser.</h1>
          <div class="c-exEMEo">
            <div class="c-jkdSvk">
              <span class="img-container">
                <img alt="jeanpaul" aria-hidden="true" src="../../../assets/img/jeanpaul_ng.png" loading="lazy">
              </span>
            </div>
            <div class="c-jkdSvk mt-5">
              <p class="c-chZgZR c-chZgZR-ibmnswx-css"><strong>Saut, je suis Jean-Paul NGALULA MULUME</strong>. Passionné par le développement informatique et l'innovation technologique, je suis créateur d'applications web.</p>
              <p class="c-chZgZR">Actuellement <strong>Ingénieur logiciel</strong> chez Innov IT à <strong>Paris, France</strong></p>
              <p class="c-chZgZR">J'adore le dark mode, l'open source, et les projets annexes. Quand je ne travaille pas, j'aime pratiquer un peu de fitness, regarder des films et <strong>manger du fromage</strong>.</p>
            </div>
          </div>
          <div class="c-UazGY">
            <a (click)="downloadCV()" role="button" class="c-gfjkKg">
              <img src="../../../assets/svg/download.svg" alt="download icon" class="download-icon"/>Télécharger mon CV ici
            </a>
          </div>
          <h2>Parcours professionnel</h2>
          <div class="experience">
            <h3>Ingénieur logiciel</h3>
            <p>
              <a href="https://inventiv-it.fr/" target="_blank">Inventiv IT</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>Sept 2023</span>
              <span> – </span>
              <span>Aujourd'hui</span>
            </p>
          </div>
          <div class="experience">
            <h3>Ingénieur logiciel</h3>
            <p>
              <a href="https://www.capgemini.com/" target="_blank">Capgemini</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>Mars 2023</span>
              <span> – </span>
              <span>Sept 2023</span>
              <span> • </span>
              <span>7 mois</span>
            </p>
          </div>
          <div class="experience">
            <h3>Ingénieur logiciel - Consultant</h3>
            <p>
              <a href="https://www.alten.fr/" target="_blank">Alten</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>Juil 2021</span>
              <span> – </span>
              <span>Fév 2023</span>
              <span> • </span>
              <span>1 an 8 mois</span>
            </p>
          </div>
          <div class="experience">
            <h3>Ingénieur logiciel</h3>
            <p>
              <a href="https://www.ownest.io/" target="_blank">Ownest</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>Sept. 2018</span>
              <span> – </span>
              <span>Jan. 2021</span>
              <span> • </span>
              <span>2 ans 5 mois</span>
            </p>
          </div>
          <div class="experience">
            <h3>Développeur back-end</h3>
            <p>
              <a href="https://www.jobnroll.fr/" target="_blank">Jobnroll</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>Juin 2018</span>
              <span> – </span>
              <span>Aout 2018</span>
              <span> • </span>
              <span>3 mois</span>
            </p>
          </div>
          <div class="experience">
            <h3>Développeur back-end</h3>
            <p>
              <a href="https://www.fpi-rdc.cd/" target="_blank">Fonds de Promotion de l'Industrie</a>
              <span> • Kinshasa, R.D.Congo</span>
            </p>
            <p>
              <span>Juin 2016</span>
              <span> – </span>
              <span>Aout 2017</span>
              <span> • </span>
              <span>1 an 3 mois</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private cvLink: string = '../../../assets/cv/cv_jeanpaul_ngalula.pdf';

  constructor(private notificationService: NotificationService) {}

  /**
   * The method called when the user wants to download my CV
   */
  downloadCV(): void {
    const notification: Notification = {
      title: "Téléchargement...",
      message: "Merci d'avoir pris le temps de télécharger mon CV"
    };
    const link = document.createElement('a');
    link.href = this.cvLink;
    link.download = '';
    link.addEventListener('click', () => {
      this.notificationService.showNotification(notification);
    });
    link.click();
  }
}
