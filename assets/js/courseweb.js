(function($) {

  const tocTarget = $('#toc');
  if (tocTarget.length > 0) {
    buildTOC(tocTarget)
    $('main').addClass('has-toc')
  }

  function buildTOC($target){

    const $listH1s = $('<ul class="toc-l1"></ul>');
    $target.empty().append($listH1s);

    let $lastH1Item = null;
    let $lastH2Item = null;
    let $workingH2List = null;
    let $workingH3List = null;

    $('h1, h2, h3').each(function(index) {

      const $heading = $(this);
      $heading.addClass('toc-anchor');
      const linkHtml = '<a href="#' + $heading.attr('id') + '">' + $heading.text() + '</a>'

      if( $heading.is('h1') ){
        // Reset the sub heading lists to null
        $workingH2List = null;
        $workingH3List = null;

        $lastH1Item = $('<li></li>');
        $lastH1Item.append(linkHtml);
        $listH1s.append($lastH1Item);

      } else if( $heading.is('h2') ){
        // If working list is null, make new and append to last h1
        if ( $workingH2List == null ) {
          $workingH2List = $('<ul class="toc-l2"></ul>');
          $lastH1Item.append($workingH2List);
          // Reset the sub heading h3 list
          $workingH3List = null;
        }

        $lastH2Item = $('<li></li>');
        $lastH2Item.append(linkHtml);
        $workingH2List.append($lastH2Item);

      } else {
        // If working list is null, make new and append to last h2
        if ( $workingH3List == null ) {
          $workingH3List = $('<ul class="toc-l3"></ul>');
          $lastH2Item.append($workingH3List);
        }

        $lastH3Item = $('<li></li>');
        $lastH3Item.append(linkHtml);
        $workingH3List.append($lastH3Item);
      }
    });
  }
})(jQuery);
