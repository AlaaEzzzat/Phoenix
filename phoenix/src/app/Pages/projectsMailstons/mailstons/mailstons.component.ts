import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailstons',
  templateUrl: './mailstons.component.html',
  styleUrls: ['./mailstons.component.css'],
})
export class MailstonsComponent implements OnInit {
  data: any[];
  constructor() {
    this.data = [
      {
        img: './../../../../assets/img/sadat.png',
        title: 'Establishment of the Molecular',
        subTitle: 'Genomics lab, Sadat city university',
        year: '2014',
      },
      {
        img: './../../../../assets/img/Assuit.PNG',
        title: 'Establishment of tissue culture',
        subTitle: 'Assiut university',
        year: '2014',
      },
      {
        img: './../../../../assets/img/Assuit.PNG',
        title: 'mutations detection kit for NSCLC',
        subTitle: '',
        year: '2015',
      },
      {
        img: './../../../../assets/img/57357.png',
        title: 'Implementation of First openarray ',
        subTitle: 'Middle East',
        year: '2015',
      },
      {
        img: './../../../../assets/img/Assuit.PNG',
        title: 'ISO 15189 accreditation ',
        subTitle: 'Assiut University',
        year: '2016',
      },
      {
        img: './../../../../assets/img/cotton.jpg',
        title: 'ISO 17025 for the 1st GMO',
        subTitle: 'Egyptian cotton authentication by genotyping',
        year: '2017',
      },
      {
        img: './../../../../assets/img/sadat.png',
        title: 'ISO 17025 accreditation for 1st',
        subTitle: '',
        year: '2018',
      },
      {
        img: './../../../../assets/img/Assuit.PNG',
        title: 'official registration and founding',
        subTitle: '',
        year: '2019',
      },
      {
        img: './../../../../assets/img/Assuit.PNG',
        title: 'Establishment of OMICSENSE',
        subTitle:
          'complete online research services platform for molecular biology',
        year: '2020',
      },
      {
        img: './../../../../assets/img/Assuit.PNG',
        title: 'In collaboration with Thudor Bilhars',
        subTitle: '',
        year: '2021',
      },
      {
        img: './../../../../assets/img/nr.png',
        title: 'Collaborating with National',
        subTitle: '100 rare disease Exome',
        year: '2021',
      },
    ];
  }

  ngOnInit(): void {}
}
