// create a spaceBar using HTML markup

//give an form element a varible
const spaceBar = s('<form action ="#" method="get"> </form>');
// i attach the spaceBar to two types of input: search and submit
spaceBar.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">',
'<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">')
// attach $spaceBar inside the <div class="search-container">
$('search-container').append(spaceBar);
