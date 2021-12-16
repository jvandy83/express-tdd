(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
	[0],
	{
		52: function (e, t, a) {
			e.exports = a.p + 'static/media/profile.926fda93.png';
		},
		53: function (e, t, a) {
			e.exports = a.p + 'static/media/hoaxify.2dcb4821.png';
		},
		58: function (e, t, a) {
			e.exports = a(97);
		},
		63: function (e, t, a) {},
		64: function (e, t, a) {},
		96: function (e, t, a) {},
		97: function (e, t, a) {
			'use strict';
			a.r(t);
			var n = a(0),
				r = a.n(n),
				c = a(28),
				s = a.n(c);
			a(63),
				a(64),
				Boolean(
					'localhost' === window.location.hostname ||
						'[::1]' === window.location.hostname ||
						window.location.hostname.match(
							/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
						),
				);
			var l = a(1),
				i = a(2),
				o = a.n(i),
				u = a(4),
				m = a(13),
				d = a(7),
				p = function (e) {
					var t = e.label,
						a = e.error,
						n = e.name,
						c = e.onChange,
						s = e.type,
						l = e.defaultValue,
						i = 'form-control';
					return (
						'file' === s && (i += '-file'),
						void 0 !== a && (i += ' is-invalid'),
						r.a.createElement(
							'div',
							{ className: 'form-group' },
							r.a.createElement('label', null, t),
							r.a.createElement('input', {
								className: i,
								name: n,
								onChange: c,
								type: s,
								defaultValue: l,
							}),
							r.a.createElement(
								'div',
								{ className: 'invalid-feedback' },
								e.error,
							),
						)
					);
				},
				f = a(3),
				b = function (e) {
					var t = e.onClick,
						a = e.pendingApiCall,
						n = e.disabled,
						c = e.text,
						s = e.className;
					return r.a.createElement(
						'button',
						{ className: s || 'btn btn-primary', onClick: t, disabled: n },
						a &&
							r.a.createElement('span', {
								className: 'spinner-border spinner-border-sm',
							}),
						' ',
						c,
					);
				},
				v = a(6),
				g = a.n(v),
				E = function (e, t, a) {
					var r = Object(n.useState)(!1),
						c = Object(l.a)(r, 2),
						s = c[0],
						i = c[1];
					return (
						Object(n.useEffect)(
							function () {
								var n,
									r,
									c = function (n, r, c) {
										n === e &&
											(a && r === t ? i(c) : !a && r.startsWith(t) && i(c));
									};
								return (
									(n = g.a.interceptors.request.use(function (e) {
										var t = e.url,
											a = e.method;
										return c(a, t, !0), e;
									})),
									(r = g.a.interceptors.response.use(
										function (e) {
											var t = e.config,
												a = t.url,
												n = t.method;
											return c(n, a, !1), e;
										},
										function (e) {
											var t = e.config,
												a = t.url,
												n = t.method;
											throw (c(n, a, !1), e);
										},
									)),
									function () {
										g.a.interceptors.request.eject(n),
											g.a.interceptors.response.eject(r);
									}
								);
							},
							[t, e, a],
						),
						s
					);
				},
				h = function (e) {
					return g.a.post('/api/1.0/users', e);
				},
				O = function (e) {
					return g.a.post('/api/1.0/users/token/' + e);
				},
				j = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: 0,
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 3;
					return g.a.get('/api/1.0/users?page='.concat(e, '&size=').concat(t));
				},
				x = function (e) {
					var t,
						a = e.email,
						n = e.password,
						r = e.token;
					e.isLoggedIn
						? ((t = r
								? 'Bearer '.concat(r)
								: 'Basic '.concat(btoa(a + ':' + n))),
						  (g.a.defaults.headers.Authorization = t))
						: delete g.a.defaults.headers.Authorization;
				},
				N = function (e, t) {
					return g.a.put('/api/1.0/users/'.concat(e), t);
				},
				w = function (e) {
					return g.a.post('/api/1.0/hoaxes', e);
				},
				y = function (e) {
					var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 0,
						a = e
							? '/api/1.0/users/'.concat(e, '/hoaxes?page=')
							: '/api/1.0/hoaxes?page=';
					return g.a.get(a + t);
				},
				k = function (e, t) {
					var a = t
						? '/api/1.0/users/'.concat(t, '/hoaxes/').concat(e)
						: '/api/1.0/hoaxes/'.concat(e);
					return g.a.get(a);
				},
				C = function (e, t) {
					var a = t
						? '/api/1.0/users/'
								.concat(t, '/hoaxes/')
								.concat(e, '?direction=after')
						: '/api/1.0/hoaxes/'.concat(e, '?direction=after');
					return g.a.get(a);
				},
				S = function (e) {
					return g.a.post('/api/1.0/hoaxes/attachments', e);
				},
				L = function (e) {
					return g.a.delete('/api/1.0/hoaxes/'.concat(e));
				},
				A = function (e) {
					return g.a.delete('/api/1.0/users/'.concat(e));
				},
				P = function (e) {
					return g.a.post('/api/1.0/user/password', { email: e });
				},
				R = function (e) {
					return g.a.put('/api/1.0/user/password', e);
				},
				D = a(9),
				I = function (e) {
					var t,
						a = Object(n.useState)({
							username: null,
							email: null,
							password: null,
							passwordRepeat: null,
						}),
						c = Object(l.a)(a, 2),
						s = c[0],
						i = c[1],
						v = Object(n.useState)({}),
						g = Object(l.a)(v, 2),
						O = g[0],
						j = g[1],
						x = Object(n.useState)(!1),
						N = Object(l.a)(x, 2),
						w = N[0],
						y = N[1],
						k = Object(n.useState)(!1),
						C = Object(l.a)(k, 2),
						S = C[0],
						L = C[1],
						A = function (e) {
							var t = e.target,
								a = t.name,
								n = t.value;
							j(function (e) {
								return Object(d.a)({}, e, Object(m.a)({}, a, void 0));
							}),
								i(function (e) {
									return Object(d.a)({}, e, Object(m.a)({}, a, n));
								});
						},
						P = Object(f.b)().t,
						R = (function () {
							var e = Object(u.a)(
								o.a.mark(function e(t) {
									var a, n, r, c, l;
									return o.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															t.preventDefault(),
															(a = s.username),
															(n = s.email),
															(r = s.password),
															(c = { username: a, email: n, password: r }),
															y(),
															j({}),
															(e.prev = 5),
															(e.next = 8),
															h(c)
														);
													case 8:
														L(!0), (e.next = 15);
														break;
													case 11:
														(e.prev = 11),
															(e.t0 = e.catch(5)),
															400 === (l = e.t0.response.status)
																? j(e.t0.response.data.validationErrors)
																: 502 === l && y(!0);
													case 15:
													case 'end':
														return e.stop();
												}
										},
										e,
										null,
										[[5, 11]],
									);
								}),
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})(),
						I = O.username,
						_ = O.email,
						z = O.password,
						T = E('post', '/api/1.0/users'),
						F = E('post', '/api/1.0/auth'),
						U = T || F;
					return (
						s.password !== s.passwordRepeat && (t = P('Password mismatch')),
						S
							? r.a.createElement(
									'div',
									{ className: 'container' },
									r.a.createElement(
										'div',
										{ className: 'alert alert-success text-center' },
										r.a.createElement(
											'div',
											null,
											r.a.createElement(
												'i',
												{
													className: 'material-icons',
													style: { fontSize: '48px' },
												},
												'done_outline',
											),
										),
										P('Activation E-mail sent', { address: s.email }),
									),
							  )
							: r.a.createElement(
									'div',
									{ className: 'container' },
									r.a.createElement(
										'div',
										{
											className:
												'col-lg-4 offset-lg-4 col-md-6 offset-md-3 card p-0 mt-5',
										},
										r.a.createElement(
											'h1',
											{ className: 'text-center card-header' },
											P('Sign Up'),
										),
										r.a.createElement(
											'div',
											{ className: 'card-body' },
											r.a.createElement(
												'form',
												null,
												r.a.createElement(p, {
													name: 'username',
													label: P('Username'),
													error: I,
													onChange: A,
												}),
												r.a.createElement(p, {
													name: 'email',
													label: P('E-mail'),
													error: _,
													onChange: A,
												}),
												r.a.createElement(p, {
													name: 'password',
													label: P('Password'),
													error: z,
													onChange: A,
													type: 'password',
												}),
												r.a.createElement(p, {
													name: 'passwordRepeat',
													label: P('Password Repeat'),
													error: t,
													onChange: A,
													type: 'password',
												}),
												w &&
													r.a.createElement(
														'div',
														{ className: 'alert alert-danger text-center' },
														r.a.createElement(
															'div',
															null,
															r.a.createElement(
																'i',
																{
																	className: 'material-icons',
																	style: { fontSize: '48px' },
																},
																'error',
															),
														),
														P('E-mail verification failure'),
													),
												r.a.createElement(
													'div',
													{ className: 'text-center' },
													r.a.createElement(b, {
														onClick: R,
														disabled: U || void 0 !== t,
														pendingApiCall: U,
														text: P('Sign Up'),
													}),
												),
											),
											r.a.createElement(
												'div',
												{ className: 'text-center mt-3' },
												r.a.createElement(
													D.b,
													{ to: '/login' },
													P('Already have an account?'),
												),
											),
										),
									),
							  )
					);
				},
				_ = a(8),
				z = function () {
					return (function () {
						var e = Object(u.a)(
							o.a.mark(function e(t) {
								return o.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														(e.prev = 0),
														(e.next = 3),
														g.a.post('/api/1.0/logout')
													);
												case 3:
													e.next = 8;
													break;
												case 5:
													(e.prev = 5),
														(e.t0 = e.catch(0)),
														console.log('backend not ready with logout');
												case 8:
													t({ type: 'logout-success' });
												case 9:
												case 'end':
													return e.stop();
											}
									},
									e,
									null,
									[[0, 5]],
								);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})();
				},
				T = function (e) {
					return { type: 'login-success', payload: e };
				},
				F = function (e) {
					return {
						type: 'update-success',
						payload: { username: e.username, image: e.image },
					};
				},
				U = function (e) {
					return (function () {
						var t = Object(u.a)(
							o.a.mark(function t(a) {
								var n, r;
								return o.a.wrap(function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(t.next = 2),
													(c = e),
													g.a.post('/api/1.0/auth', Object(d.a)({}, c))
												);
											case 2:
												return (
													(n = t.sent),
													(r = Object(d.a)(
														{
															id: n.data.id,
															username: n.data.username,
															image: n.data.image,
															token: n.data.token,
														},
														e,
													)),
													a(T(r)),
													t.abrupt('return', n)
												);
											case 6:
											case 'end':
												return t.stop();
										}
									var c;
								}, t);
							}),
						);
						return function (e) {
							return t.apply(this, arguments);
						};
					})();
				},
				H = function () {
					return r.a.createElement(
						'div',
						{ className: 'd-flex justify-content-center' },
						r.a.createElement(
							'div',
							{ className: 'spinner-border text-black-50' },
							r.a.createElement('span', { className: 'sr-only' }, 'Loading...'),
						),
					);
				},
				B = function (e) {
					var t = Object(n.useState)(),
						a = Object(l.a)(t, 2),
						c = a[0],
						s = a[1],
						i = Object(n.useState)(),
						m = Object(l.a)(i, 2),
						d = m[0],
						v = m[1],
						g = Object(n.useState)(),
						h = Object(l.a)(g, 2),
						j = h[0],
						x = h[1],
						N = Object(n.useState)('done'),
						w = Object(l.a)(N, 2),
						y = w[0],
						k = w[1],
						C = E('post', '/api/1.0/auth'),
						S = Object(_.b)();
					Object(n.useEffect)(
						function () {
							var t = (function () {
								var e = Object(u.a)(
									o.a.mark(function e(t) {
										return o.a.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.prev = 0), (e.next = 3), O(t);
														case 3:
															k('active'),
																setTimeout(function () {
																	k('done');
																}, 5e3),
																(e.next = 10);
															break;
														case 7:
															(e.prev = 7), (e.t0 = e.catch(0)), k('failed');
														case 10:
														case 'end':
															return e.stop();
													}
											},
											e,
											null,
											[[0, 7]],
										);
									}),
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})();
							e.location.search
								? (k('activating'), t(e.location.search.substring(7)))
								: k('done');
						},
						[e.location.search],
					),
						Object(n.useEffect)(
							function () {
								x(void 0);
							},
							[c, d],
						);
					var L,
						A = (function () {
							var t = Object(u.a)(
								o.a.mark(function t(a) {
									var n, r, s;
									return o.a.wrap(
										function (t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															a.preventDefault(),
															(n = { email: c, password: d }),
															(r = e.history),
															(s = r.push),
															x(void 0),
															(t.prev = 5),
															(t.next = 8),
															S(U(n))
														);
													case 8:
														s('/'), (t.next = 14);
														break;
													case 11:
														(t.prev = 11),
															(t.t0 = t.catch(5)),
															x(t.t0.response.data.message);
													case 14:
													case 'end':
														return t.stop();
												}
										},
										t,
										null,
										[[5, 11]],
									);
								}),
							);
							return function (e) {
								return t.apply(this, arguments);
							};
						})(),
						P = Object(f.b)().t;
					if ('failed' === y)
						return r.a.createElement(
							'div',
							{ className: 'container' },
							r.a.createElement(
								'div',
								{ className: 'alert alert-danger text-center' },
								r.a.createElement(
									'div',
									null,
									r.a.createElement(
										'i',
										{
											className: 'material-icons',
											style: { fontSize: '48px' },
										},
										'error',
									),
								),
								P('Account activation failure'),
							),
						);
					'activating' === y
						? (L = r.a.createElement(
								'div',
								{ className: 'alert alert-info text-center' },
								r.a.createElement(H, null),
								r.a.createElement('span', null, P('Activation in progress')),
						  ))
						: 'active' === y &&
						  (L = r.a.createElement(
								'div',
								{ className: 'alert alert-success text-center' },
								r.a.createElement(
									'div',
									null,
									r.a.createElement(
										'i',
										{
											className: 'material-icons',
											style: { fontSize: '48px' },
										},
										'done_outline',
									),
								),
								r.a.createElement('span', null, P('Your account is activated')),
						  ));
					var R = c && d;
					return r.a.createElement(
						'div',
						{ className: 'container' },
						L && L,
						r.a.createElement(
							'div',
							{
								className:
									'col-lg-4 offset-lg-4 col-md-6 offset-md-3 card p-0 mt-5',
							},
							r.a.createElement(
								'h1',
								{ className: 'text-center card-header' },
								P('Login'),
							),
							r.a.createElement(
								'div',
								{ className: 'card-body' },
								r.a.createElement(
									'form',
									null,
									r.a.createElement(p, {
										label: P('E-Mail'),
										onChange: function (e) {
											return s(e.target.value);
										},
									}),
									r.a.createElement(p, {
										label: P('Password'),
										type: 'password',
										onChange: function (e) {
											return v(e.target.value);
										},
									}),
									j &&
										r.a.createElement(
											'div',
											{ className: 'alert alert-danger' },
											j,
										),
									r.a.createElement(
										'div',
										{ className: 'text-center' },
										r.a.createElement(b, {
											onClick: A,
											disabled: !R || C,
											pendingApiCall: C,
											text: P('Login'),
										}),
									),
								),
								r.a.createElement(
									'div',
									{ className: 'text-center mt-3' },
									r.a.createElement(
										D.b,
										{ to: '/password-reset-request' },
										P('Forget password?'),
									),
								),
							),
						),
					);
				},
				M = function (e) {
					var t = Object(n.useState)([]),
						a = Object(l.a)(t, 2),
						c = a[0],
						s = a[1];
					Object(n.useEffect)(function () {
						g.a
							.get('/locales/supported-languages.json')
							.then(function (e) {
								s(e.data);
							})
							.catch(function (e) {});
					}, []);
					var i = Object(f.b)().i18n,
						o = function (e) {
							i.changeLanguage(e),
								(function (e) {
									g.a.defaults.headers['accept-language'] = e;
								})(e);
						};
					return r.a.createElement(
						'div',
						{ className: 'container' },
						c.map(function (e) {
							return r.a.createElement('img', {
								key: e.language,
								src: e.flag,
								alt: 'flag',
								onClick: function () {
									return o(e.language);
								},
								style: { cursor: 'pointer' },
							});
						}),
					);
				},
				q = a(52),
				V = a.n(q),
				W = function (e) {
					var t = e.image,
						a = e.tempimage,
						n = V.a;
					return (
						t &&
							(n =
								t.length > 64 ? 'data:image/png;base64,' + t : 'images/' + t),
						r.a.createElement(
							'img',
							Object.assign({ alt: 'Profile', src: a || n }, e, {
								onError: function (e) {},
							}),
						)
					);
				},
				J = function (e) {
					var t = e.user,
						a = t.id,
						n = t.username,
						c = t.image;
					return r.a.createElement(
						D.b,
						{
							to: '/user/'.concat(a),
							className: 'list-group-item list-group-item-action',
						},
						r.a.createElement(W, {
							className: 'rounded-circle',
							width: '32',
							height: '32',
							alt: ''.concat(n, ' profile'),
							image: c,
						}),
						r.a.createElement('span', { className: 'pl-2' }, n),
					);
				},
				X = function () {
					var e = Object(n.useState)({
							content: [],
							size: 3,
							page: 0,
							totalPages: 0,
						}),
						t = Object(l.a)(e, 2),
						a = t[0],
						c = t[1],
						s = Object(n.useState)(!1),
						i = Object(l.a)(s, 2),
						m = i[0],
						d = i[1],
						p = E('get', '/api/1.0/users?page');
					Object(n.useEffect)(function () {
						b();
					}, []);
					var b = (function () {
							var e = Object(u.a)(
								o.a.mark(function e(t) {
									var a;
									return o.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return d(!1), (e.prev = 1), (e.next = 4), j(t);
													case 4:
														(a = e.sent), c(a.data), (e.next = 11);
														break;
													case 8:
														(e.prev = 8), (e.t0 = e.catch(1)), d(!0);
													case 11:
													case 'end':
														return e.stop();
												}
										},
										e,
										null,
										[[1, 8]],
									);
								}),
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})(),
						v = Object(f.b)().t,
						g = a.content,
						h = a.page,
						O = a.totalPages,
						x = 0 === h,
						N = 0 === O || h === O - 1,
						w = r.a.createElement(
							'div',
							null,
							!1 === x &&
								r.a.createElement(
									'button',
									{
										className: 'btn btn-sm btn-light',
										onClick: function () {
											var e = a.page - 1;
											b(e);
										},
									},
									v('Previous'),
								),
							!1 === N &&
								r.a.createElement(
									'button',
									{
										className: 'btn btn-sm btn-light float-right',
										onClick: function () {
											var e = a.page + 1;
											b(e);
										},
									},
									v('Next'),
								),
						);
					p && (w = r.a.createElement(H, null));
					var y = r.a.createElement('div', null);
					return (
						(y =
							p && 0 === g.length
								? r.a.createElement(H, null)
								: g.length > 0 &&
								  r.a.createElement(
										'div',
										{ className: 'card' },
										r.a.createElement(
											'h3',
											{ className: 'card-header text-center' },
											v('Users'),
										),
										r.a.createElement(
											'div',
											{ className: 'list-group-flush' },
											g.map(function (e) {
												return r.a.createElement(J, {
													key: e.username,
													user: e,
												});
											}),
										),
										w,
										m &&
											r.a.createElement(
												'div',
												{ className: 'text-center text-danger' },
												v('Load Failure'),
											),
								  )),
						r.a.createElement('div', null, y)
					);
				},
				Y =
					(a(96),
					function (e) {
						var t = e.image,
							a = e.uploading;
						return r.a.createElement(
							'div',
							{ style: { position: 'relative' } },
							r.a.createElement('img', {
								className: 'img-thumbnail',
								src: t,
								alt: 'hoax-attachment',
							}),
							r.a.createElement(
								'div',
								{ className: 'overlay', style: { opacity: a ? 1 : 0 } },
								r.a.createElement(
									'div',
									{ className: 'd-flex justify-content-center h-100' },
									r.a.createElement(
										'div',
										{ className: 'spinner-border text-light m-auto' },
										r.a.createElement(
											'span',
											{ className: 'sr-only' },
											'Loading...',
										),
									),
								),
							),
						);
					}),
				$ = function () {
					var e = Object(_.c)(function (e) {
							return { image: e.image };
						}).image,
						t = Object(n.useState)(!1),
						a = Object(l.a)(t, 2),
						c = a[0],
						s = a[1],
						i = Object(n.useState)(''),
						m = Object(l.a)(i, 2),
						v = m[0],
						g = m[1],
						h = Object(n.useState)({}),
						O = Object(l.a)(h, 2),
						j = O[0],
						x = O[1],
						N = Object(n.useState)(),
						y = Object(l.a)(N, 2),
						k = y[0],
						C = y[1],
						L = Object(n.useState)(),
						A = Object(l.a)(L, 2),
						P = A[0],
						R = A[1],
						D = Object(f.b)().t;
					Object(n.useEffect)(
						function () {
							c || (g(''), x({}), C(), R());
						},
						[c],
					),
						Object(n.useEffect)(
							function () {
								x(function (e) {
									return Object(d.a)({}, e, { content: void 0 });
								});
							},
							[v],
						);
					var I = E('post', '/api/1.0/hoaxes', !0),
						z = E('post', '/api/1.0/hoaxes/attachments', !0),
						T = (function () {
							var e = Object(u.a)(
								o.a.mark(function e() {
									var t;
									return o.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(t = { content: v, fileAttachment: P }),
															(e.prev = 1),
															(e.next = 4),
															w(t)
														);
													case 4:
														s(!1), (e.next = 10);
														break;
													case 7:
														(e.prev = 7),
															(e.t0 = e.catch(1)),
															e.t0.response.data.validationErrors
																? x(e.t0.response.data.validationErrors)
																: console.log('not implemented');
													case 10:
													case 'end':
														return e.stop();
												}
										},
										e,
										null,
										[[1, 7]],
									);
								}),
							);
							return function () {
								return e.apply(this, arguments);
							};
						})(),
						F = (function () {
							var e = Object(u.a)(
								o.a.mark(function e(t) {
									var a, n;
									return o.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(a = new FormData()).append('file', t),
															(e.prev = 2),
															(e.next = 5),
															S(a)
														);
													case 5:
														(n = e.sent), R(n.data.id), (e.next = 13);
														break;
													case 9:
														(e.prev = 9),
															(e.t0 = e.catch(2)),
															C(void 0),
															x(function (t) {
																return Object(d.a)({}, t, {
																	image: e.t0.response.data.message,
																});
															});
													case 13:
													case 'end':
														return e.stop();
												}
										},
										e,
										null,
										[[2, 9]],
									);
								}),
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})(),
						U = 'form-control';
					return (
						j.content && (U += ' is-invalid'),
						r.a.createElement(
							'div',
							{ className: 'card p-1 flex-row' },
							r.a.createElement(W, {
								image: e,
								width: '32',
								height: '32',
								className: 'rounded-circle mr-1',
							}),
							r.a.createElement(
								'div',
								{ className: 'flex-fill' },
								r.a.createElement('textarea', {
									className: U,
									rows: c ? '3' : '1',
									onFocus: function () {
										return s(!0);
									},
									onChange: function (e) {
										return g(e.target.value);
									},
									value: v,
								}),
								r.a.createElement(
									'div',
									{ className: 'invalid-feedback' },
									j.content,
								),
								c &&
									r.a.createElement(
										r.a.Fragment,
										null,
										!k &&
											r.a.createElement(p, {
												type: 'file',
												onChange: function (e) {
													if (!(e.target.files.length < 1)) {
														var t = e.target.files[0],
															a = new FileReader();
														(a.onloadend = function () {
															C(a.result), F(t);
														}),
															a.readAsDataURL(t);
													}
												},
												error: j.image,
											}),
										k && r.a.createElement(Y, { image: k, uploading: z }),
										r.a.createElement(
											'div',
											{ className: 'text-right mt-1' },
											r.a.createElement(b, {
												className: 'btn btn-primary',
												onClick: T,
												text: 'Hoaxify',
												pendingApiCall: I,
												disabled: I || z,
											}),
											r.a.createElement(
												'button',
												{
													className: 'btn btn-light d-inline-flex ml-1',
													onClick: function () {
														return s(!1);
													},
													disabled: I || z,
												},
												r.a.createElement(
													'i',
													{ className: 'material-icons' },
													'close',
												),
												D('Cancel'),
											),
										),
									),
							),
						)
					);
				},
				G = a(19),
				K = a(30),
				Q = function (e) {
					var t = e.visible,
						a = e.onClickCancel,
						n = e.message,
						c = e.onClickOk,
						s = e.pendingApiCall,
						l = e.title,
						i = e.okButton,
						o = Object(f.b)().t,
						u = 'modal fade';
					return (
						t && (u += ' show d-block'),
						r.a.createElement(
							'div',
							{ className: u, style: { backgroundColor: '#000000b0' } },
							r.a.createElement(
								'div',
								{ className: 'modal-dialog' },
								r.a.createElement(
									'div',
									{ className: 'modal-content' },
									r.a.createElement(
										'div',
										{ className: 'modal-header' },
										r.a.createElement('h5', { className: 'modal-title' }, l),
									),
									r.a.createElement('div', { className: 'modal-body' }, n),
									r.a.createElement(
										'div',
										{ className: 'modal-footer' },
										r.a.createElement(
											'button',
											{
												className: 'btn btn-secondary',
												disabled: s,
												onClick: a,
											},
											o('Cancel'),
										),
										r.a.createElement(b, {
											className: 'btn btn-danger',
											onClick: c,
											pendingApiCall: s,
											disabled: s,
											text: i,
										}),
									),
								),
							),
						)
					);
				},
				Z = function (e) {
					var t = Object(_.c)(function (e) {
							return e.username;
						}),
						a = e.hoax,
						c = e.onDeleteHoax,
						s = a.user,
						i = a.content,
						m = a.timestamp,
						d = a.fileAttachment,
						p = a.id,
						b = s.id,
						v = s.username,
						g = s.image,
						h = Object(n.useState)(!1),
						O = Object(l.a)(h, 2),
						j = O[0],
						x = O[1],
						N = E('delete', '/api/1.0/hoaxes/'.concat(p), !0),
						w = Object(f.b)(),
						y = w.t,
						k = w.i18n,
						C = (function () {
							var e = Object(u.a)(
								o.a.mark(function e() {
									return o.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.next = 2), L(p);
												case 2:
													c(p);
												case 3:
												case 'end':
													return e.stop();
											}
									}, e);
								}),
							);
							return function () {
								return e.apply(this, arguments);
							};
						})(),
						S = Object(K.a)(m, k.language),
						A = t === v;
					return r.a.createElement(
						r.a.Fragment,
						null,
						r.a.createElement(
							'div',
							{ className: 'card p-1' },
							r.a.createElement(
								'div',
								{ className: 'd-flex' },
								r.a.createElement(W, {
									image: g,
									width: '32',
									height: '32',
									className: 'rounded-circle m-1',
								}),
								r.a.createElement(
									'div',
									{ className: 'flex-fill m-auto pl-2' },
									r.a.createElement(
										D.b,
										{ to: '/user/'.concat(b), className: 'text-dark' },
										r.a.createElement(
											'h6',
											{ className: 'd-inline' },
											r.a.createElement('strong', null, v),
										),
										r.a.createElement('span', null, ' - '),
										r.a.createElement('span', null, S),
									),
								),
								A &&
									r.a.createElement(
										'button',
										{
											className: 'btn btn-delete-link btn-sm',
											onClick: function () {
												return x(!0);
											},
										},
										r.a.createElement(
											'i',
											{ className: 'material-icons' },
											'delete_outline',
										),
									),
							),
							r.a.createElement('div', { className: 'pl-5' }, i),
							d &&
								r.a.createElement(
									'div',
									{ className: 'pl-5' },
									d.fileType &&
										d.fileType.startsWith('image') &&
										r.a.createElement('img', {
											className: 'img-fluid',
											src: 'attachments/' + d.filename,
											alt: i,
										}),
									(!d.fileType || !d.fileType.startsWith('image')) &&
										r.a.createElement(
											'strong',
											null,
											'Hoax has unknown attachment',
										),
								),
						),
						r.a.createElement(Q, {
							visible: j,
							title: y('Delete Hoax'),
							onClickCancel: function () {
								x(!1);
							},
							onClickOk: C,
							message: r.a.createElement(
								'div',
								null,
								r.a.createElement(
									'div',
									null,
									r.a.createElement(
										'strong',
										null,
										y('Are you sure to delete hoax?'),
									),
								),
								r.a.createElement('span', null, i),
							),
							pendingApiCall: N,
							okButton: y('Delete Hoax'),
						}),
					);
				},
				ee = a(21),
				te = function () {
					var e = Object(n.useState)({ content: [], last: !0, number: 0 }),
						t = Object(l.a)(e, 2),
						a = t[0],
						c = t[1],
						s = Object(n.useState)(0),
						i = Object(l.a)(s, 2),
						m = i[0],
						p = i[1],
						b = Object(f.b)().t,
						v = Object(ee.h)().userid,
						g = v
							? '/api/1.0/users/'.concat(v, '/hoaxes?page=')
							: '/api/1.0/hoaxes?page=',
						h = E('get', g),
						O = 0,
						j = 0;
					if (a.content.length > 0) {
						j = a.content[0].id;
						var x = a.content.length - 1;
						O = a.content[x].id;
					}
					var N = v
							? '/api/1.0/users/'.concat(v, '/hoaxes/').concat(O)
							: '/api/1.0/hoaxes/'.concat(O),
						w = E('get', N, !0),
						S = v
							? '/api/1.0/users/'
									.concat(v, '/hoaxes/')
									.concat(j, '?direction=after')
							: '/api/1.0/hoaxes/'.concat(j, '?direction=after'),
						L = E('get', S, !0);
					Object(n.useEffect)(
						function () {
							(function () {
								var e = Object(u.a)(
									o.a.mark(function e(t) {
										var a;
										return o.a.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.prev = 0), (e.next = 3), y(v, t);
														case 3:
															(a = e.sent),
																c(function (e) {
																	return Object(d.a)({}, a.data, {
																		content: [].concat(
																			Object(G.a)(e.content),
																			Object(G.a)(a.data.content),
																		),
																	});
																}),
																(e.next = 9);
															break;
														case 7:
															(e.prev = 7), (e.t0 = e.catch(0));
														case 9:
														case 'end':
															return e.stop();
													}
											},
											e,
											null,
											[[0, 7]],
										);
									}),
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})()();
						},
						[v],
					);
					var A = (function () {
							var e = Object(u.a)(
								o.a.mark(function e() {
									var t;
									return o.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.next = 2), k(O, v);
												case 2:
													(t = e.sent),
														c(function (e) {
															return Object(d.a)({}, t.data, {
																content: [].concat(
																	Object(G.a)(e.content),
																	Object(G.a)(t.data.content),
																),
															});
														});
												case 4:
												case 'end':
													return e.stop();
											}
									}, e);
								}),
							);
							return function () {
								return e.apply(this, arguments);
							};
						})(),
						P = (function () {
							var e = Object(u.a)(
								o.a.mark(function e() {
									var t;
									return o.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.next = 2), C(j, v);
												case 2:
													(t = e.sent),
														c(function (e) {
															return Object(d.a)({}, e, {
																content: [].concat(
																	Object(G.a)(t.data),
																	Object(G.a)(e.content),
																),
															});
														}),
														p(0);
												case 5:
												case 'end':
													return e.stop();
											}
									}, e);
								}),
							);
							return function () {
								return e.apply(this, arguments);
							};
						})(),
						R = function (e) {
							c(function (t) {
								return Object(d.a)({}, t, {
									content: t.content.filter(function (t) {
										return t.id !== e;
									}),
								});
							});
						},
						D = a.content,
						I = a.page === a.totalPages - 1;
					return 0 === D.length
						? r.a.createElement(
								'div',
								{ className: 'alert alert-secondary text-center' },
								h ? r.a.createElement(H, null) : b('There are no hoaxes'),
						  )
						: r.a.createElement(
								'div',
								null,
								m > 0 &&
									r.a.createElement(
										'div',
										{
											className: 'alert alert-secondary text-center mb-1',
											style: { cursor: L ? 'not-allowed' : 'pointer' },
											onClick: L ? function () {} : P,
										},
										L ? r.a.createElement(H, null) : b('There are new hoaxes'),
									),
								D.map(function (e) {
									return r.a.createElement(Z, {
										key: e.id,
										hoax: e,
										onDeleteHoax: R,
									});
								}),
								!I &&
									r.a.createElement(
										'div',
										{
											className: 'alert alert-secondary text-center',
											style: { cursor: w ? 'not-allowed' : 'pointer' },
											onClick: w ? function () {} : A,
										},
										w ? r.a.createElement(H, null) : b('Load old hoaxes'),
									),
						  );
				},
				ae = function () {
					var e = Object(_.c)(function (e) {
						return { isLoggedIn: e.isLoggedIn };
					}).isLoggedIn;
					return r.a.createElement(
						'div',
						{ className: 'container' },
						r.a.createElement(
							'div',
							{ className: 'row' },
							r.a.createElement(
								'div',
								{ className: 'col' },
								e &&
									r.a.createElement(
										'div',
										{ className: 'mb-1' },
										r.a.createElement($, null),
									),
								r.a.createElement(te, null),
							),
							r.a.createElement(
								'div',
								{ className: 'col' },
								r.a.createElement(X, null),
							),
						),
					);
				},
				ne = function (e) {
					var t = Object(n.useState)(!1),
						a = Object(l.a)(t, 2),
						c = a[0],
						s = a[1],
						i = Object(n.useState)(),
						m = Object(l.a)(i, 2),
						v = m[0],
						g = m[1],
						h = Object(_.c)(function (e) {
							return { id: e.id };
						}).id,
						O = Object(ee.h)().userid,
						j = Object(n.useState)({}),
						x = Object(l.a)(j, 2),
						w = x[0],
						y = x[1],
						k = Object(n.useState)(!1),
						C = Object(l.a)(k, 2),
						S = C[0],
						L = C[1],
						P = Object(n.useState)(),
						R = Object(l.a)(P, 2),
						D = R[0],
						I = R[1],
						T = Object(n.useState)({}),
						U = Object(l.a)(T, 2),
						H = U[0],
						B = U[1],
						M = Object(n.useState)(!1),
						q = Object(l.a)(M, 2),
						V = q[0],
						J = q[1],
						X = Object(_.b)(),
						Y = Object(ee.g)();
					Object(n.useEffect)(
						function () {
							y(e.user);
						},
						[e.user],
					),
						Object(n.useEffect)(
							function () {
								L(O == h);
							},
							[h, O],
						),
						Object(n.useEffect)(
							function () {
								B(function (e) {
									return Object(d.a)({}, e, { username: void 0 });
								});
							},
							[v],
						),
						Object(n.useEffect)(
							function () {
								B(function (e) {
									return Object(d.a)({}, e, { image: void 0 });
								});
							},
							[D],
						);
					var $ = w.id,
						G = w.username,
						K = w.image,
						Z = E('delete', '/api/1.0/users/'.concat($), !0),
						te = Object(f.b)().t;
					Object(n.useEffect)(
						function () {
							c ? g(G) : (g(void 0), I(void 0));
						},
						[c, G],
					);
					var ae = (function () {
							var e = Object(u.a)(
								o.a.mark(function e() {
									var t, a, n, r;
									return o.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															D && (t = D.split(',')[1]),
															(a = { username: v, image: t }),
															(e.prev = 2),
															(e.next = 5),
															N(O, a)
														);
													case 5:
														(n = e.sent),
															s(!1),
															n.data
																? (y(n.data), X(F(n.data)))
																: ((r = Object(d.a)({}, w, { username: v })),
																  y(r),
																  X(F(r))),
															(e.next = 13);
														break;
													case 10:
														(e.prev = 10),
															(e.t0 = e.catch(2)),
															400 === e.t0.response.status
																? B(e.t0.response.data.validationErrors)
																: B({ image: e.t0.response.data.message });
													case 13:
													case 'end':
														return e.stop();
												}
										},
										e,
										null,
										[[2, 10]],
									);
								}),
							);
							return function () {
								return e.apply(this, arguments);
							};
						})(),
						ne = (function () {
							var e = Object(u.a)(
								o.a.mark(function e() {
									return o.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.next = 2), A($);
												case 2:
													J(!1), X(z()), Y.push('/');
												case 5:
												case 'end':
													return e.stop();
											}
									}, e);
								}),
							);
							return function () {
								return e.apply(this, arguments);
							};
						})(),
						re = E('put', '/api/1.0/users/' + O),
						ce = H.username,
						se = H.image;
					return r.a.createElement(
						'div',
						{ className: 'card text-center' },
						r.a.createElement(
							'div',
							{ className: 'card-header' },
							r.a.createElement(W, {
								className: 'rounded-circle shadow',
								width: '200',
								height: '200',
								alt: ''.concat(G, ' profile'),
								image: K,
								tempimage: D,
							}),
						),
						r.a.createElement(
							'div',
							{ className: 'card-body' },
							!c &&
								r.a.createElement(
									r.a.Fragment,
									null,
									r.a.createElement('h3', null, G),
									S &&
										r.a.createElement(
											r.a.Fragment,
											null,
											r.a.createElement(
												'button',
												{
													className: 'btn btn-success d-inline-flex',
													onClick: function () {
														return s(!0);
													},
												},
												r.a.createElement(
													'i',
													{ className: 'material-icons' },
													'edit',
												),
												te('Edit'),
											),
											r.a.createElement(
												'div',
												{ className: 'pt-2' },
												r.a.createElement(
													'button',
													{
														className: 'btn btn-danger d-inline-flex',
														onClick: function () {
															return J(!0);
														},
													},
													r.a.createElement(
														'i',
														{ className: 'material-icons' },
														'directions_run',
													),
													te('Delete My Account'),
												),
											),
										),
								),
							c &&
								r.a.createElement(
									'div',
									null,
									r.a.createElement(p, {
										label: te('Change Username'),
										defaultValue: G,
										onChange: function (e) {
											g(e.target.value);
										},
										error: ce,
									}),
									r.a.createElement(p, {
										type: 'file',
										onChange: function (e) {
											if (!(e.target.files.length < 1)) {
												var t = e.target.files[0],
													a = new FileReader();
												(a.onloadend = function () {
													I(a.result);
												}),
													a.readAsDataURL(t);
											}
										},
										error: se,
									}),
									r.a.createElement(
										'div',
										null,
										r.a.createElement(b, {
											className: 'btn btn-primary d-inline-flex',
											onClick: ae,
											disabled: re,
											pendingApiCall: re,
											text: r.a.createElement(
												r.a.Fragment,
												null,
												r.a.createElement(
													'i',
													{ className: 'material-icons' },
													'save',
												),
												te('Save'),
											),
										}),
										r.a.createElement(
											'button',
											{
												className: 'btn btn-light d-inline-flex ml-1',
												onClick: function () {
													return s(!1);
												},
												disabled: re,
											},
											r.a.createElement(
												'i',
												{ className: 'material-icons' },
												'close',
											),
											te('Cancel'),
										),
									),
								),
						),
						r.a.createElement(Q, {
							visible: V,
							title: te('Delete My Account'),
							okButton: te('Delete My Account'),
							onClickCancel: function () {
								J(!1);
							},
							onClickOk: ne,
							message: te('Are you sure to delete your account?'),
							pendingApiCall: Z,
						}),
					);
				},
				re = function () {
					var e = Object(n.useState)({}),
						t = Object(l.a)(e, 2),
						a = t[0],
						c = t[1],
						s = Object(n.useState)(!1),
						i = Object(l.a)(s, 2),
						m = i[0],
						d = i[1],
						p = Object(ee.h)().userid,
						b = Object(f.b)().t,
						v = E('get', '/api/1.0/users/' + p, !0);
					return (
						Object(n.useEffect)(
							function () {
								d(!1);
							},
							[a],
						),
						Object(n.useEffect)(
							function () {
								(function () {
									var e = Object(u.a)(
										o.a.mark(function e() {
											var t;
											return o.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(e.prev = 0),
																	d(!1),
																	(e.next = 4),
																	(a = p),
																	g.a.get('/api/1.0/users/'.concat(a))
																);
															case 4:
																(t = e.sent), c(t.data), (e.next = 11);
																break;
															case 8:
																(e.prev = 8), (e.t0 = e.catch(0)), d(!0);
															case 11:
															case 'end':
																return e.stop();
														}
													var a;
												},
												e,
												null,
												[[0, 8]],
											);
										}),
									);
									return function () {
										return e.apply(this, arguments);
									};
								})()();
							},
							[p],
						),
						m
							? r.a.createElement(
									'div',
									{ className: 'container' },
									r.a.createElement(
										'div',
										{ className: 'alert alert-danger text-center' },
										r.a.createElement(
											'div',
											null,
											r.a.createElement(
												'i',
												{
													className: 'material-icons',
													style: { fontSize: '48px' },
												},
												'error',
											),
										),
										b('User not found'),
									),
							  )
							: v || a.id != p
							? r.a.createElement(H, null)
							: r.a.createElement(
									'div',
									{ className: 'container' },
									r.a.createElement(
										'div',
										{ className: 'row' },
										r.a.createElement(
											'div',
											{ className: 'col' },
											r.a.createElement(ne, { user: a }),
										),
										r.a.createElement(
											'div',
											{ className: 'col' },
											r.a.createElement(te, null),
										),
									),
							  )
					);
				},
				ce = function (e) {
					var t = Object(n.useState)(),
						a = Object(l.a)(t, 2),
						c = a[0],
						s = a[1],
						i = Object(n.useState)(),
						m = Object(l.a)(i, 2),
						d = m[0],
						v = m[1],
						g = Object(n.useState)({}),
						h = Object(l.a)(g, 2),
						O = h[0],
						j = h[1],
						x = Object(n.useState)(),
						N = Object(l.a)(x, 2),
						w = N[0],
						y = N[1];
					Object(n.useEffect)(
						function () {
							v(), j({});
						},
						[c],
					);
					var k,
						C = Object(f.b)().t,
						S = E('post', '/api/1.0/user/password', !0),
						L = (function () {
							var e = Object(u.a)(
								o.a.mark(function e(t) {
									return o.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													t.preventDefault(),
														v(),
														P(c)
															.then(function (e) {
																y(e.data.message);
															})
															.catch(function (e) {
																v(e.response.data.message),
																	400 === e.response.status &&
																		j(e.response.data.validationErrors);
															});
												case 3:
												case 'end':
													return e.stop();
											}
									}, e);
								}),
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})();
					return w
						? r.a.createElement(
								'div',
								{ className: 'container' },
								r.a.createElement(
									'div',
									{
										className:
											'col-lg-4 offset-lg-4 col-md-6 offset-md-3 card p-0 mt-5',
									},
									r.a.createElement(
										'div',
										{ className: 'alert alert-success text-center m-0' },
										r.a.createElement(
											'div',
											null,
											r.a.createElement(
												'i',
												{
													className: 'material-icons',
													style: { fontSize: '48px' },
												},
												'done_outline',
											),
										),
										r.a.createElement('span', null, w),
									),
								),
						  )
						: (d &&
								!O.email &&
								(k = r.a.createElement(
									'div',
									{ className: 'alert alert-danger text-center mt-3 mb-0' },
									r.a.createElement(
										'div',
										null,
										r.a.createElement(
											'i',
											{
												className: 'material-icons',
												style: { fontSize: '48px' },
											},
											'error',
										),
									),
									d,
								)),
						  r.a.createElement(
								'div',
								{ className: 'container' },
								r.a.createElement(
									'div',
									{
										className:
											'col-lg-4 offset-lg-4 col-md-6 offset-md-3 card p-0 mt-5',
									},
									r.a.createElement(
										'h3',
										{ className: 'text-center card-header' },
										C('Reset your password'),
									),
									r.a.createElement(
										'div',
										{ className: 'card-body' },
										r.a.createElement(
											'form',
											null,
											r.a.createElement(p, {
												label: C('E-Mail'),
												onChange: function (e) {
													return s(e.target.value);
												},
												error: O.email,
											}),
											r.a.createElement(
												'div',
												{ className: 'text-center' },
												r.a.createElement(b, {
													text: C('Reset'),
													onClick: L,
													disabled: S,
													pendingApiCall: S,
												}),
											),
										),
										k && k,
									),
								),
						  ));
				},
				se = function (e) {
					var t = Object(n.useState)({ password: null, passwordRepeat: null }),
						a = Object(l.a)(t, 2),
						c = a[0],
						s = a[1],
						i = Object(n.useState)({}),
						v = Object(l.a)(i, 2),
						g = v[0],
						h = v[1],
						O = Object(n.useState)(!1),
						j = Object(l.a)(O, 2),
						x = j[0],
						N = j[1],
						w = Object(n.useRef)();
					Object(n.useEffect)(
						function () {
							return (
								x &&
									(w.current = setTimeout(function () {
										e.history.push('/login');
									}, 5e3)),
								function () {
									clearTimeout(w.current);
								}
							);
						},
						[x, e.history],
					),
						Object(n.useEffect)(
							function () {
								e.location.search || e.history.push('/password-reset-request');
							},
							[e.location.search, e.history],
						);
					var y = function (e) {
							var t = e.target,
								a = t.name,
								n = t.value;
							h(function (e) {
								return Object(d.a)({}, e, Object(m.a)({}, a, void 0));
							}),
								s(function (e) {
									return Object(d.a)({}, e, Object(m.a)({}, a, n));
								});
						},
						k = (function () {
							var t = Object(u.a)(
								o.a.mark(function t(a) {
									var n, r, s;
									return o.a.wrap(
										function (t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															a.preventDefault(),
															(n = c.password),
															(r = e.location.search.substring(7)),
															(s = { password: n, passwordResetToken: r }),
															h({}),
															(t.prev = 5),
															(t.next = 8),
															R(s)
														);
													case 8:
														N(!0), (t.next = 15);
														break;
													case 11:
														(t.prev = 11),
															(t.t0 = t.catch(5)),
															400 === t.t0.response.status
																? h(t.t0.response.data.validationErrors)
																: console.log(t.t0);
													case 15:
													case 'end':
														return t.stop();
												}
										},
										t,
										null,
										[[5, 11]],
									);
								}),
							);
							return function (e) {
								return t.apply(this, arguments);
							};
						})(),
						C = E('put', '/api/1.0/user/password', !0),
						S = Object(f.b)().t;
					if (x)
						return r.a.createElement(
							'div',
							{ className: 'container' },
							r.a.createElement(
								'div',
								{
									className:
										'col-lg-4 offset-lg-4 col-md-6 offset-md-3 card p-0 mt-5',
								},
								r.a.createElement(
									'div',
									{ className: 'alert alert-success text-center m-0' },
									r.a.createElement(
										'div',
										null,
										r.a.createElement(
											'i',
											{
												className: 'material-icons',
												style: { fontSize: '48px' },
											},
											'done_outline',
										),
									),
									r.a.createElement(
										'span',
										null,
										S(
											'Your password is updated. Page will be redirected to Login Page',
										),
									),
								),
							),
						);
					var L,
						A = g.password;
					return (
						c.password !== c.passwordRepeat && (L = S('Password mismatch')),
						r.a.createElement(
							'div',
							{ className: 'container' },
							r.a.createElement(
								'div',
								{
									className:
										'col-lg-4 offset-lg-4 col-md-6 offset-md-3 card p-0 mt-5',
								},
								r.a.createElement(
									'h3',
									{ className: 'text-center card-header' },
									S('Set New Password'),
								),
								r.a.createElement(
									'div',
									{ className: 'card-body' },
									r.a.createElement(
										'form',
										null,
										r.a.createElement(p, {
											name: 'password',
											label: S('Password'),
											error: A,
											onChange: y,
											type: 'password',
										}),
										r.a.createElement(p, {
											name: 'passwordRepeat',
											label: S('Password Repeat'),
											error: L,
											onChange: y,
											type: 'password',
										}),
										r.a.createElement(
											'div',
											{ className: 'text-center' },
											r.a.createElement(b, {
												onClick: k,
												disabled: C || void 0 !== L,
												pendingApiCall: C,
												text: S('Set Password'),
											}),
										),
									),
								),
							),
						)
					);
				},
				le = a(53),
				ie = a.n(le),
				oe = function (e) {
					var t = Object(f.b)().t,
						a = Object(_.c)(function (e) {
							return {
								isLoggedIn: e.isLoggedIn,
								id: e.id,
								username: e.username,
								image: e.image,
							};
						}),
						c = a.id,
						s = a.username,
						i = a.isLoggedIn,
						o = a.image,
						u = Object(n.useRef)(null),
						m = Object(n.useState)(!1),
						d = Object(l.a)(m, 2),
						p = d[0],
						b = d[1];
					Object(n.useEffect)(
						function () {
							return (
								document.addEventListener('click', v),
								function () {
									document.removeEventListener('click', v);
								}
							);
						},
						[i],
					);
					var v = function (e) {
							(null !== u.current && u.current.contains(e.target)) || b(!1);
						},
						g = Object(_.b)(),
						E = r.a.createElement(
							'ul',
							{ className: 'navbar-nav ml-auto' },
							r.a.createElement(
								'li',
								null,
								r.a.createElement(
									D.b,
									{ className: 'nav-link', to: '/login' },
									t('Login'),
								),
							),
							r.a.createElement(
								'li',
								null,
								r.a.createElement(
									D.b,
									{ className: 'nav-link', to: '/signup' },
									t('Sign Up'),
								),
							),
						);
					if (i) {
						var h = 'dropdown-menu p-0 shadow';
						p && (h += ' show'),
							(E = r.a.createElement(
								'ul',
								{ className: 'navbar-nav ml-auto', ref: u },
								r2.a.createElement(
									'li',
									{ className: 'nav-item dropdown' },
									r.a.createElement(
										'div',
										{
											className: 'd-flex',
											style: { cursor: 'pointer' },
											onClick: function () {
												return b(!0);
											},
										},
										r.a.createElement(W, {
											image: o,
											width: '32',
											height: '32',
											className: 'rounded-circle m-auto',
										}),
										r.a.createElement(
											'span',
											{ className: 'nav-link dropdown-toggle' },
											s,
										),
									),
									r.a.createElement(
										'div',
										{ className: h },
										r.a.createElement(
											D.b,
											{
												className: 'dropdown-item d-flex p-2',
												to: '/user/'.concat(c),
												onClick: function () {
													return b(!1);
												},
											},
											r.a.createElement(
												'i',
												{ className: 'material-icons text-info mr-2' },
												'person',
											),
											t('My Profile'),
										),
										r.a.createElement(
											'span',
											{
												className: 'dropdown-item  d-flex p-2',
												onClick: function () {
													g(z());
												},
												style: { cursor: 'pointer' },
											},
											r.a.createElement(
												'i',
												{ className: 'material-icons text-danger mr-2' },
												'power_settings_new',
											),
											t('Logout'),
										),
									),
								),
							));
					}
					return r.a.createElement(
						'div',
						{ className: 'shadow-sm bg-light mb-2' },
						r.a.createElement(
							'nav',
							{ className: 'navbar navbar-light container navbar-expand' },
							r.a.createElement(
								D.b,
								{ className: 'navbar-brand', to: '/' },
								r.a.createElement('img', {
									src: ie.a,
									width: '60',
									alt: 'Hoaxify Logo',
								}),
								'Hoaxify',
							),
							E,
						),
					);
				},
				ue = function () {
					var e = Object(_.b)(),
						t = Object(_.c)(function (e) {
							return {
								email: e.email,
								password: e.password,
								isLoggedIn: e.isLoggedIn,
								token: e.token,
							};
						}),
						a = t.email,
						c = t.password,
						s = t.isLoggedIn,
						i = t.token,
						o = Object(n.useState)(!0),
						u = Object(l.a)(o, 2),
						m = u[0],
						d = u[1];
					return (
						Object(n.useEffect)(function () {
							s && i
								? e(U({ email: a, password: c }))
										.then(function (e) {
											return d(!1);
										})
										.catch(function (e) {
											return d(!1);
										})
								: d(!1);
						}, []),
						m
							? r.a.createElement(H, null)
							: r.a.createElement(
									'div',
									null,
									r.a.createElement(
										D.a,
										null,
										r.a.createElement(oe, null),
										r.a.createElement(
											ee.d,
											null,
											r.a.createElement(ee.b, {
												exact: !0,
												path: '/',
												component: ae,
											}),
											!s &&
												r.a.createElement(ee.b, {
													path: '/login',
													component: B,
												}),
											r.a.createElement(ee.b, {
												path: '/signup',
												component: I,
											}),
											r.a.createElement(ee.b, {
												path: '/user/:userid',
												component: re,
											}),
											r.a.createElement(ee.b, {
												path: '/password-reset-request',
												component: ce,
											}),
											r.a.createElement(ee.b, {
												path: '/password-reset',
												component: se,
											}),
											r.a.createElement(ee.a, { to: '/' }),
										),
									),
									r.a.createElement(M, null),
							  )
					);
				},
				me = a(24),
				de = a(54),
				pe = {
					isLoggedIn: !1,
					id: void 0,
					username: void 0,
					email: void 0,
					image: void 0,
					password: void 0,
					token: void 0,
				},
				fe = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Object(d.a)({}, pe),
						t = arguments.length > 1 ? arguments[1] : void 0;
					return 'logout-success' === t.type
						? pe
						: 'login-success' === t.type
						? Object(d.a)({}, t.payload, { isLoggedIn: !0 })
						: 'update-success' === t.type
						? Object(d.a)({}, e, {}, t.payload)
						: e;
				},
				be = a(55),
				ve = new (a.n(be).a)(),
				ge = function () {
					var e = (function () {
						var e = ve.get('hoax-auth');
						return (
							e || {
								isLoggedIn: !1,
								username: void 0,
								email: void 0,
								image: void 0,
								password: void 0,
							}
						);
					})();
					x(e);
					var t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || me.c,
						a = Object(me.d)(fe, e, t(Object(me.a)(de.a)));
					return (
						a.subscribe(function () {
							var e;
							(e = a.getState()), ve.set('hoax-auth', e), x(a.getState());
						}),
						a
					);
				},
				Ee = a(37),
				he = a(56);
			Ee.a
				.use(f.a)
				.use(he.a)
				.init({
					fallbackLng: 'en',
					ns: ['translations'],
					defaultNS: 'translations',
					keySeparator: !1,
					interpolation: { escapeValue: !1, formatSeparator: ',' },
					react: { wait: !0 },
				});
			Object(K.b)('tr', function (e, t) {
				return [
					['az \xf6nce', '\u015fimdi'],
					['%s saniye \xf6nce', '%s saniye i\xe7inde'],
					['1 dakika \xf6nce', '1 dakika i\xe7inde'],
					['%s dakika \xf6nce', '%s dakika i\xe7inde'],
					['1 saat \xf6nce', '1 saat i\xe7inde'],
					['%s saat \xf6nce', '%s saat i\xe7inde'],
					['1 g\xfcn \xf6nce', '1 g\xfcn i\xe7inde'],
					['%s g\xfcn \xf6nce', '%s g\xfcn i\xe7inde'],
					['1 hafta \xf6nce', '1 hafta i\xe7inde'],
					['%s hafta \xf6nce', '%s hafta i\xe7inde'],
					['1 ay \xf6nce', '1 ay i\xe7inde'],
					['%s ay \xf6nce', '%s ay i\xe7inde'],
					['1 y\u0131l \xf6nce', '1 y\u0131l i\xe7inde'],
					['%s y\u0131l \xf6nce', '%s y\u0131l i\xe7inde'],
				][t];
			});
			Ee.a;
			var Oe = ge();
			s.a.render(
				r.a.createElement(
					_.a,
					{ store: Oe },
					r.a.createElement(
						n.Suspense,
						{ fallback: 'loading' },
						r.a.createElement(ue, null),
					),
				),
				document.getElementById('root'),
			),
				'serviceWorker' in navigator &&
					navigator.serviceWorker.ready
						.then(function (e) {
							e.unregister();
						})
						.catch(function (e) {
							console.error(e.message);
						});
		},
	},
	[[58, 1, 2]],
]);
//# sourceMappingURL=main.1d63c5f0.chunk.js.map
