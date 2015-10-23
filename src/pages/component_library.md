---
layout: internal
title: Component Library
permalink: /component-library/
---

{% assign settings = site.data.settings %}
{% assign articles = site.data.articles %}

<div class="container">
	<div class="row">
		<div class="col-md-4">

			<h2 class="m-b-md">Buttons</h2>

			<a href="#" class="btn btn-primary btn-text">Read More <i class="fa fa-angle-right"></i></a>&nbsp;
			<a href="#" class="btn btn-primary"><i class="fa fa-angle-right"></i></a>

			<div class="spacer m-b-lg"></div>
			<h2 class="clearfix m-b-md">Single Card</h2>

			{% for item in articles | limit: 1 %}
				{% capture card %}
					<div class="card">
						<div class="card-head">
							<img width="100%" class="card-img-top" src="http://placehold.it/400x300" alt="...">
							<a href="#" class="pull-right btn btn-primary btn-text">Read More <i class="fa fa-angle-right"></i></a>
						</div>
						<div class="card-block">
							<h3 class="card-title">{{ item.title }}</h3>
							<p><date class="text-capitalize m-b">07 NOVEMBER 2015</date></p>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				{% endcapture %}
				{{ card }}
			{% endfor %}

			<div class="spacer m-b-lg"></div>
			<h2 class="clearfix m-b-md">Card No Text</h2>

			{% for item in articles | limit: 1 %}
				<div class="card">
					<div class="card-head">
						<img width="100%" class="card-img-top" src="http://placehold.it/400x300" alt="...">
						<a href="#" class="pull-right btn btn-primary"><i class="fa fa-angle-right"></i></a>
					</div>
					<div class="card-block">
						<h3 class="card-title">{{ item.title }}</h3>
					</div>
				</div>
			{% endfor %}

			<div class="spacer m-b-lg"></div>
			<h2 class="clearfix m-b-md">Multiple Cards</h2>

			<ul class="cards-collapse-xs block-grid-xs-1">
				{% for item in articles | limit: 1 %}
					<li class="col-md-4 col-lg-4">
						{{ card }}
					</li>
				{% endfor %}
			</ul>

			<div class="spacer m-b-lg"></div>
			<h2 class="clearfix m-b-md">Slim Card</h2>

			<div class="card card-slim">
				<div class="media">
					<a class="media-left" href="#">
						<img class="media-object" src="http://placehold.it/154x100" alt="...">
					</a>
					<div class="media-body">
						<date class="text-muted text-capitalize">07 NOVEMBER 2015</date>
						<h3 class="media-heading">Clubs SA Awards for Excellent 2015</h3>
						<a href="#" class="btn btn-primary"><i class="fa fa-angle-right"></i></a>
					</div>
				</div>
			</div>

			<div class="spacer m-b-lg"></div>
			<h2 class="clearfix m-b-md">Color Cards</h2>

			<div class="card color-card card-inverse card-quaternary">
				<div class="card-block clearfix">
					<h3 class="card-title"><i class="fa fa-search"></i>&nbsp; Find a club</h3>

					<form>
						<div class="row">
							<div class="col-xs-10 p-r-0">
								<input type="text" class="form-control" placeholder="Suburb, postcode or club name">
							</div>
							<div class="col-xs-2 p-l-0">
								<button type="submit" class="btn btn-primary"><i class="fa fa-angle-right"></i></button>
							</div>
						</div>
					</form>

				</div>
			</div>

			<!--  ONLINE PAYMENTS -->
			<div class="card color-card card-inverse card-tertiary">
				<div class="card-block clearfix">
					<h3 class="card-title"><i class="fa fa-credit-card"></i>&nbsp; Online Payments</h3>
					<p class="card-text">You can make payments to Clubs SA using our online payment system.</p>
					<a href="#" class="btn btn-primary"><i class="fa fa-angle-right"></i></a>
				</div>
			</div>

			<!-- MEMBER LOGIN -->
			<div class="card color-card card-inverse card-senary">
				<div class="card-block clearfix">
					<h3 class="card-title"><i class="fa fa-users"></i>&nbsp; Member log in</h3>

					<form class="form-inline">
						<div class="form-group">
							<label>
								<input type="text" class="form-control" id="exampleInputName2" placeholder="User ID">
							</label>
						</div>
						<div class="form-group">
							<label>
								<input type="password" class="form-control" id="exampleInputEmail2" placeholder="Password">
							</label>
						</div>
						<button type="submit" class="btn btn-primary"><i class="fa fa-angle-right"></i></button>
					</form>

				</div>
			</div>

			<div class="spacer m-b-lg"></div>
			<h2 class="clearfix m-b-md">Media Card</h2>


			<a class="card-link" href="#dsd">
				<div class="card bio-card">
					<div class="card-block">
						<div class="row">
							<div class="col-md-4">
								<img width="100%" class="m-b" src="/img/ui/no-face.png" alt="...">
							</div>
							<div class="col-md-8">
								<h3 class="media-heading card-title">Name Goes Here</h3>
								<h4 class="text-muted m-b">Position</h4>
								<p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
							</div>
						</div>
					</div>
				</div>
			</a>

			<div class="spacer m-b-lg"></div>
			<h2 class="clearfix m-b-md">Contact Info</h2>

			{% include contact_info.html %}

			<div class="spacer m-b-lg"></div>

		</div>
	</div>
</div>





<div class="container">
	<h2 class="clearfix m-b-md">Partners</h2>

	<div class="partners container m-b-lg">

		<div class="row">
			<div class="col-md-4 primary">

				<ul class="block-grid-xs-2">
					<li><img width="100%" src="http://placehold.it/130x104"></li>
					<li><img width="100%" src="http://placehold.it/130x104"></li>
				</ul>

			</div>
			<div class="col-md-4 secondary">

				<ul class="block-grid-xs-3 p-x last-1">
					<li><img width="100%" src="http://placehold.it/130x104"></li>
					<li><img width="100%" src="http://placehold.it/130x104"></li>
					<li><img width="100%" src="http://placehold.it/130x104"></li>
				</ul>

			</div>
			<div class="col-md-4 secondary">

				<ul class="block-grid-xs-3 p-x last-2">
					<li><img width="100%" src="http://placehold.it/130x104"></li>
					<li><img width="100%" src="http://placehold.it/130x104"></li>
					<li><img width="100%" src="http://placehold.it/130x104"></li>
				</ul>

			</div>
		</div>
	</div>
</div>