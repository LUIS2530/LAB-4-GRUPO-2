import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from "src/app/services/person.service";
import { NgForm } from "@angular/forms";
import { NgxToastService } from 'ngx-toast-notifier';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class PersonComponent implements OnInit {
  personDialog?: boolean;
  chartDialog?: boolean;
  persons: Person[]= [];
  person?: Person;
  data?: []
  submitted?: boolean;

  selectedPerson: Person = new Person();

  constructor(private personService: PersonService, private ngxToastService: NgxToastService) { }
  // , private messageService: MessageService
  ngOnInit(): void {
    this.getPersons()
  }

  resetForm(form: NgForm) {
    if(form) {
      form.reset()
    }
  }
  openNew() {
    this.person = {};
    this.submitted = false;
    this.personDialog = true;
  }

  hideDialog(form: NgForm) {
    this.personDialog = false;
    this.submitted = false;
    console.log(form.value._id);
    if (!form.value._id){
      this.resetForm(form)
    }
    this.getPersons();
  }

  addSuccess():void{
    this.ngxToastService.onSuccess('Resultado exitoso','La información ha sido subida correctamente')
  }

  addWarning():void{
    this.ngxToastService.onInfo('Resultado exitoso','Usuario eliminado')
  }

  addPerson(form: NgForm) {
    this.submitted = true;
    if (this.selectedPerson.name && this.selectedPerson.DNI){

      if (form.value._id){
        this.personService.patchPerson(form.value)
        .subscribe( res => {
          this.getPersons();
          this.addSuccess()
        })
        this.resetForm(form);
      } else {
        this.personService.postPerson(form.value)
        .subscribe( res => {
          this.getPersons();
          this.addSuccess()
        })
        this.resetForm(form);
      }
      
      this.personDialog = false;
    }
  }

  getPersons() {
    this.personService.getPersons()
    .subscribe(res => {
      this.persons = res as Person[]
    })
  }

  editPerson(person: Person){
    this.selectedPerson = person
    console.log("editando");
    this.personDialog = true;

  }

  deletePerson(person: Person){
    if(confirm('¿seguro de eliminar?')){
      this.personService.deletePerson(person)
    .subscribe(res => {
      this.getPersons()
    })
    console.log("deletando");
    this.addWarning();
    }
    
    
  }


}


