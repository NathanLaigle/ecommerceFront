import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
})
export class ValidationComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  _totalAmount: number;
  card: any;
  cardHandler = this.onChange.bind(this);
  cardError: string;
  stripe;
  elements;
  constructor(private cd: ChangeDetectorRef) {
    this._totalAmount = 20;
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.card) {
      // We remove event listener here to keep memory clean
      this.card.removeEventListener('change', this.cardHandler);
      this.card.destroy();
    }
  }
  ngAfterViewInit() {
    (async () => {
      this.stripe = await loadStripe(
        'pk_test_51IAui8HqXpIcKjPZctscuNEoZdWjV4h3jqm88LTCobsPe0FkwetmZGpW2YT9VLWTJ7nHiX7jEZAnWvWQUvG7iMEA0081QRarwN'
      );
      this.elements = await this.stripe.elements();
      this.initiateCardElement();
    })();
  }
  initiateCardElement() {
    // Giving a base style here, but most of the style is in scss file
    const cardStyle = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.card = this.elements.create('card', { cardStyle });
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }
  onChange({ error }) {
    if (error) {
      this.cardError = error.message;
    } else {
      this.cardError = null;
    }
    this.cd.detectChanges();
  }
  async createStripeToken() {
    const { token, error } = await this.stripe.createToken(this.card);
    if (token) {
      this.onSuccess(token);
    } else {
      this.onError(error);
    }
  }
  onSuccess(token) {
    console.log(token);
  }
  onError(error) {
    if (error.message) {
      this.cardError = error.message;
    }
  }
}
