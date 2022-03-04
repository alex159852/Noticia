import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  lista:Noticia[] = [];
  constructor(private Noticia: NoticiaService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Noticia.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              titulo:item.payload.doc.data().titulo,
              noticia:item.payload.doc.data().noticia,
              fecha:item.payload.doc.data().fecha,
              autor:item.payload.doc.data().autor,
              categoria:item.payload.doc.data().categoria,
              

            
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Noticia){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de Borrar?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Noticia.delete((String)(prod.key));
        Swal.fire(
          'Borrado!',
          'Su item fue borrardo.',
          'success'
        )
      }
    })
  }
  buscar(){
    this.Noticia.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              titulo:item.payload.doc.data().titulo,
              noticia:item.payload.doc.data().noticia,
              fecha:item.payload.doc.data().fecha,
              autor:item.payload.doc.data().autor,
              categoria:item.payload.doc.data().categoria,
            }
          );

        })
      });
  }


}

