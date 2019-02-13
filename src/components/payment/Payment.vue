<template>
  <!-- <div ref="card"></div>
      <button v-on:click="purchase">Purchase</button> -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <div class="form-payment">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title text-center">Payment</h3>
            </div>
            <div class="hori-line">
              <hr>
            </div>
            <div class="panel-body">
              <form method="POST">
                <div class="container form-payment__body">
                  <div class="row payment-row">
                    <div class="col-md-12 col-xs-12 col-sm-12">
                      <div ref="card"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                      <button
                        v-on:click="purchase"
                        class="btn btn-primary"
                      >Purchase</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Stripe from 'stripe'

let stripe = Stripe('pk_test_6pv5sNk0EfHhA6cWCFIDzOGL')
let elements = stripe.elements()
let card
export default {
  mounted: function () {
    card = elements.create('card')
    card.mount(this.$refs.card)
  },
  purchase: function () {
    stripe.createToken(card).then(function (result) {
      // Access the token with result.token
    })
  }
}
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.form-payment {
  position: relative;
  left: 50%;
  top: 50%;
  background-color: #212529;
  color: rgb(240, 232, 232);
  padding: 20px;
  border-radius: 20px;
}
.hori-line {
  background-color: rgb(240, 232, 232);
}
.payment-row {
  background-color: rgb(240, 232, 232);
  border-radius: 10px;
  padding: 10px;
}
.form-payment__body {
  border-radius: 20px;
}
</style>
