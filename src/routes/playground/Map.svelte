<script>
  export let position = 0;
</script>

<div class="grid">
  <div class="row">
    <div class="cell" style="background-color: {position == 0 ? 'black' : 'gray'};" />
    <div class="cell" style="background-color: {position == 1 ? 'black' : 'gray'};" />
    <div class="cell" style="background-color: {position == 2 ? 'black' : 'gray'};" />
  </div>
  <div class="row">
    <div class="cell" style="background-color: {position == 3 ? 'black' : 'gray'};" />
    <div class="cell" style="background-color: {position == 4 ? 'black' : 'gray'};" />
    <div class="cell" style="background-color: {position == 5 ? 'black' : 'gray'};" />
  </div>
  <div class="row">
    <div class="cell" style="background-color: {position == 6 ? 'black' : 'gray'};" />
    <div class="cell" style="background-color: {position == 7 ? 'black' : 'gray'};" />
    <div class="cell" style="background-color: {position == 8 ? 'black' : 'gray'};" />
  </div>
</div>

<style>
  .grid {
    display: table;
    border-spacing: 1px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .row {
    display: table-row;
  }

  .cell {
    width: 20px;
    height: 20px;
    background: grey;
    display: table-cell;
  }
</style>
