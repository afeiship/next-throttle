# next-throttle
> Throttle for next.


## usage:
```html
<div class="actions">
  <button id="btn3">click with throttle!!!</button>
</div>

<script type="text/javascript">
  document.querySelector('#btn3').onclick = nx.throttle(function () {
    console.log('on click! with throttle!');
  });
</script>
```
