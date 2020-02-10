var imagenes=[1,2,3,4,5,6,7,8,9,10,11,12,13];
var galeria=document.getElementById('galeria');

for(imagen of imagenes){
    galeria.innerHTML += `
    <div class="card">
        <a href="#" data-toggle="modal" data-target="#id${imagen}">
            <img src="/img/${imagen}.jpg" alt="" class="card-img-top">
        </a>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <button type="button" class="close mr-3" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <img src="img/1.jpg" alt="" class="img-fluid rounded" >
        </div>
    </div>
    `

}