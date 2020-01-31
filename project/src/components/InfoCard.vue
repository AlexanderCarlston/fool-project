<template>
  <b-card>
    <p>Motley Fool Returns</p>
    <b-container>
      <b-row>
        <b-col class="flex-container">
          <span>STOCK ADVISOR:</span>
          <span class="color-green">377%</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="flex-container">
          <span>S&P 500:</span>
          <span class="color-grey">100%</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span
            class="subtext"
          >Stock Advisor launched in February of 2002. Returns as of 01/31/2020.</span>
        </b-col>
      </b-row>
      <div class="align-center-container">
        <b-button
          href="https://www.fool.com/order/fe_offers/352ee7c0-5553-4272-ba67-20b0abe98d69?c=sa-bbn-control&source=isasitwdg0000007&testId=op-sa-v-sp-wdg&cellId=3&campaign=sa-bbn-evergreen"
          class="card-button"
          target="_blank"
        >Join Stock Advisor</b-button>
      </div>
    </b-container>
  </b-card>
</template>

<style scoped>
p {
  text-align: center;
  color: #828282;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.color-green {
  color: green;
}

.color-grey {
  color: grey;
}

.subtext {
  font-size: 10px;
  margin-top: 10px;
}

.card-button {
  background-color: #5fa85d;
  margin-top: 10px;
}

.card-button:hover {
  background-color: #5fa85d;
  color: #2D6048;
}
.align-center-container {
  display: flex;
  justify-content: center;
}
</style>