<!-- Prefeitura Municipal de Ipirá Internal Styles -->
<style type="text/css">
    .colormag-button,
    button,
    input[type=reset],
    input[type=button],
    input[type=submit],
    #masthead.colormag-header-clean #site-navigation.main-small-navigation .menu-toggle {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    blockquote {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor'] . 'D0'}} @else {{'#289dccd0'}}  @endif
    }

    .pagina blockquote a {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #site-title a,
    .next a:hover,
    .previous a:hover,
    .social-links i.fa:hover,
    a,
    a .fa,
    #masthead.colormag-header-clean .social-links li:hover i.fa,
    #masthead.colormag-header-classic .social-links li:hover i.fa,
    #masthead.colormag-header-clean .breaking-news .newsticker a:hover,
    #masthead.colormag-header-classic .breaking-news .newsticker a:hover,
    #masthead.colormag-header-classic #site-navigation .fa.search-top:hover,
    #masthead.colormag-header-classic #site-navigation .random-post a:hover .fa-random,
    #masthead .main-small-navigation li:hover>.sub-toggle i,
    .better-responsive-menu #masthead .main-small-navigation .sub-toggle.active .fa {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .fa.search-top:hover,
    #masthead.colormag-header-classic #site-navigation.main-small-navigation .menu-toggle,
    .main-navigation ul li.focus>a,
    #masthead.colormag-header-classic .main-navigation ul ul.sub-menu li.focus>a {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #site-navigation {
        border-top: 4px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .home-icon.front_page_on,
    .main-navigation a:hover,
    .main-navigation ul li ul li a:hover,
    .main-navigation ul li ul li:hover>a,
    .main-navigation ul li.current-menu-ancestor>a,
    .main-navigation ul li.current-menu-item ul li a:hover,
    .main-navigation ul li.current-menu-item>a,
    .main-navigation ul li.current_page_ancestor>a,
    .main-navigation ul li.current_page_item>a,
    .main-navigation ul li:hover>a,
    .main-small-navigation li a:hover,
    .site-header .menu-toggle:hover,
    #masthead.colormag-header-classic .main-navigation ul ul.sub-menu li:hover>a,
    #masthead.colormag-header-classic .main-navigation ul ul.sub-menu li.current-menu-ancestor>a,
    #masthead.colormag-header-classic .main-navigation ul ul.sub-menu li.current-menu-item>a,
    #masthead .main-small-navigation li:hover>a,
    #masthead .main-small-navigation li.current-page-ancestor>a,
    #masthead .main-small-navigation li.current-menu-ancestor>a,
    #masthead .main-small-navigation li.current-page-item>a,
    #masthead .main-small-navigation li.current-menu-item>a {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .main-small-navigation .current-menu-item>a,
    .main-small-navigation .current_page_item>a {
        background: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #masthead.colormag-header-classic .main-navigation ul ul.sub-menu li:hover,
    #masthead.colormag-header-classic .main-navigation ul ul.sub-menu li.current-menu-ancestor,
    #masthead.colormag-header-classic .main-navigation ul ul.sub-menu li.current-menu-item,
    #masthead.colormag-header-classic #site-navigation .menu-toggle,
    #masthead.colormag-header-classic #site-navigation .menu-toggle:hover,
    #masthead.colormag-header-classic .main-navigation ul>li:hover>a,
    #masthead.colormag-header-classic .main-navigation ul>li.current-menu-item>a,
    #masthead.colormag-header-classic .main-navigation ul>li.current-menu-ancestor>a,
    #masthead.colormag-header-classic .main-navigation ul li.focus>a {
        border-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .promo-button-area a:hover {
        border: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif;
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #content .wp-pagenavi .current,
    #content .wp-pagenavi a:hover,
    .format-link .entry-content a,
    .pagination span {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .pagination a span:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif;
        border-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #content .comments-area a.comment-edit-link:hover,
    #content .comments-area a.comment-permalink:hover,
    #content .comments-area article header cite a:hover,
    .comments-area .comment-author-link a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .comments-area .comment-author-link span {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .comment .comment-reply-link:hover,
    .nav-next a,
    .nav-previous a {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #secondary .widget-title {
        border-bottom: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #secondary a:hover{
        text-decoration:underline;
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #primary .widget-title {
        border-bottom: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #secondary .widget-title span {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .footer-widgets-area .widget-title {
        border-bottom: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .footer-widgets-area .widget-title span,
    .colormag-footer--classic .footer-widgets-area .widget-title span::before {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .footer-widgets-area a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .advertisement_above_footer .widget-title {
        border-bottom: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .advertisement_above_footer .widget-title span {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    a#scroll-up i {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .page-header .page-title {
        border-bottom: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #content .post .article-content .above-entry-meta .cat-links a,
    .page-header .page-title span {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    #content .post .article-content .entry-title a:hover,
    .entry-meta .byline i,
    .entry-meta .cat-links i,
    .entry-meta a,
    .post .entry-title a:hover,
    .search .entry-title a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .entry-meta .post-format i {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .entry-meta .comments-link a:hover,
    .entry-meta .edit-link a:hover,
    .entry-meta .posted-on a:hover,
    .entry-meta .tag-links a:hover,
    .single #content .tags a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .more-link,
    .no-post-thumbnail {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .post-box .entry-meta .cat-links a:hover,
    .post-box .entry-meta .posted-on a:hover,
    .post.post-box .entry-title a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_featured_slider .slide-content .above-entry-meta .cat-links a {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_featured_slider .slide-content .below-entry-meta .byline a:hover,
    .widget_featured_slider .slide-content .below-entry-meta .comments a:hover,
    .widget_featured_slider .slide-content .below-entry-meta .posted-on a:hover,
    .widget_featured_slider .slide-content .entry-title a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_highlighted_posts .article-content .above-entry-meta .cat-links a {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .byline a:hover,
    .comments a:hover,
    .edit-link a:hover,
    .posted-on a:hover,
    .tag-links a:hover,
    .widget_highlighted_posts .article-content .below-entry-meta .byline a:hover,
    .widget_highlighted_posts .article-content .below-entry-meta .comments a:hover,
    .widget_highlighted_posts .article-content .below-entry-meta .posted-on a:hover,
    .widget_highlighted_posts .article-content .entry-title a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_featured_posts .article-content .above-entry-meta .cat-links a {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_featured_posts .article-content .entry-title a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_featured_posts .widget-title {
        border-bottom: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_featured_posts .widget-title span {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .related-posts-main-title .fa,
    .single-related-posts .article-content .entry-title a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_slider_area .widget-title,
    .widget_beside_slider .widget-title {
        border-bottom: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .widget_slider_area .widget-title span,
    .widget_beside_slider .widget-title span {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    @media (max-width: 768px) {
        .better-responsive-menu .sub-toggle {
            background-color: @if(!empty($configuracao['cor'])) {{adjust_brightness($configuracao['cor'], -30)}} @else {{'#289dcc'}}  @endif
            /* #157500 */
        }
    }
</style>
<!-- Prefeitura Municipal de Ipirá Elementor Internal Styles -->
<style type="text/css">
    .elementor .tg-module-wrapper .module-title {
        border-bottom: 1px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .elementor .tg-module-wrapper .module-title span,
    .elementor .tg-module-wrapper .tg-post-category {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }

    .elementor .tg-module-wrapper .tg-module-meta .tg-module-comments a:hover,
    .elementor .tg-module-wrapper .tg-module-meta .tg-post-auther-name a:hover,
    .elementor .tg-module-wrapper .tg-module-meta .tg-post-date a:hover,
    .elementor .tg-module-wrapper .tg-module-title:hover a,
    .elementor .tg-module-wrapper.tg-module-grid .tg_module_grid .tg-module-info .tg-module-meta a:hover {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }
    #content .media-heading a:hover {
        color:  @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }
    .links-top a:hover{
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }
    .links-top a:hover .fa{
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif
    }
</style>

<style type="text/css">
    .btn-prefeitura {
        color: #ffffff;
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif;
    }

    .btn-prefeitura:focus, .btn-prefeitura.focus {
        color: #ffffff;
        background-color: @if(!empty($configuracao['cor'])) {{adjust_brightness($configuracao['cor'], -30)}} @else {{'#289dcc'}}  @endif;
    }

    .btn-prefeitura:hover {
        color: #ffffff;
        background-color: @if(!empty($configuracao['cor'])) {{adjust_brightness($configuracao['cor'], -30)}} @else {{'#289dcc'}}  @endif;
    }

    .btn-prefeitura:active, .btn-prefeitura.active, .open > .dropdown-toggle.btn-prefeitura {
        color: #ffffff;
        background-color: @if(!empty($configuracao['cor'])) {{adjust_brightness($configuracao['cor'], -30)}} @else {{'#289dcc'}}  @endif;
    }

    .btn-prefeitura:active:hover, .btn-prefeitura.active:hover, .open > .dropdown-toggle.btn-prefeitura:hover, .btn-prefeitura:active:focus, .btn-prefeitura.active:focus, .open > .dropdown-toggle.btn-prefeitura:focus, .btn-prefeitura:active.focus, .btn-prefeitura.active.focus, .open > .dropdown-toggle.btn-prefeitura.focus {
        color: #ffffff;
        background-color: @if(!empty($configuracao['cor'])) {{adjust_brightness($configuracao['cor'], -30)}} @else {{'#289dcc'}}  @endif;
    }

    .btn-prefeitura.disabled:hover, .btn-prefeitura[disabled]:hover, fieldset[disabled] .btn-prefeitura:hover, .btn-prefeitura.disabled:focus, .btn-prefeitura[disabled]:focus, fieldset[disabled] .btn-prefeitura:focus, .btn-prefeitura.disabled.focus, .btn-prefeitura[disabled].focus, fieldset[disabled] .btn-prefeitura.focus {
        background-color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif;
    }

    .btn-prefeitura .badge {
        color: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif;
        background-color: #ffffff;
    }

    .sidebar-left ul {
        border-left: 2px solid @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        line-height: 1.42857143;
        font-size: 14px;
        font-family: Montserrat,sans-serif;
        color: #555;
        box-sizing: border-box;
        margin-top: 0;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

    .nav li a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        line-height: 1.42857143;
        font-size: 14px;
        font-family: Montserrat,sans-serif;
        list-style: none;
        box-sizing: border-box;
        background-color: transparent;
        text-decoration: none;
        color: inherit;
        margin-left: 3px;
        position: relative;
        display: block;
        padding: 10px 15px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    .nav li a:hover {
        background: @if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif;
        color: #fff!important;
        text-decoration: none!important;
    }
</style>