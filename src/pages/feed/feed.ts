import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {
  [x: string]: any;
  public nome_usuario:string = "Charles Franca do Cógigo"
  public like:number = 0
  public lista_filmes= Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert(num1+num2);
  }

  public setLikes(){
    let qtd_atual =  this.like
    qtd_atual++
    this.like = qtd_atual
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        console.log(data);

        this.lista_filmes = response.results;

        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing =false;
        }
        
      }, error => {
        console.log(error + "2");

        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing =false;
        }
      }
    );

  }

}
