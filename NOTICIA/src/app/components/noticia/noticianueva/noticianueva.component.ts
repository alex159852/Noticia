import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-noticianueva',
  templateUrl: './noticianueva.component.html',
  styleUrls: ['./noticianueva.component.css']
})
export class NoticianuevaComponent implements OnInit {
  item:Noticia=new Noticia();
  seccion='noticia';
  edit:boolean=false;
  constructor(private dbProd:NoticiaService,
      private router:Router,
      private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      if(params.id){
        this.edit=true;
        this.item.key=params.id
        this.dbProd.getItem(params.id).snapshotChanges().subscribe(a=>{
          console.log(a.payload.data());
          let prod:any;
          prod=a.payload.data();
          this.item= Object.assign(
            { 
              key:a.payload.id,
              titulo:prod.titulo,
              noticia:prod.noticia,
              fecha:prod.fecha,
              autor:prod.autor,
              categoria:prod.categoria,
            
            }
          );
        });
        
      }else
      {
        this.edit=false;
        console.log("nuevo!!!!")
        
      }
    });
  }
  enviar(){
    if(this.edit){
      this.dbProd.edit((String)(this.item.key),this.item);
    }else{

      this.dbProd.add(this.item).then(a=>{
        console.log("datos server",a);
      });
    }
    Swal.fire({ title: 'Datos guardados',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {}
        this.router.navigate(['/'+this.seccion]);
    });
    
  } 
  salir(){}

}

