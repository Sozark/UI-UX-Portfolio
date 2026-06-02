# Noah C. Jones — Portfolio
### jonesncharbonnet.com

## Files
```
index.html        ← entire site (all pages)
css/main.css      ← all styles
js/main.js        ← navigation, form, scroll reveal
img/              ← project screenshots
CNAME             ← tells GitHub Pages your custom domain
```

## Deploy to GitHub Pages (free hosting)

1. Create a new repo on GitHub named exactly: `your-username.github.io`
   (e.g. `Sozark.github.io`)

2. Upload all these files to the repo root

3. Go to repo Settings → Pages → Source → Deploy from branch → main / root

4. Your site will be live at `https://Sozark.github.io` within a few minutes

## Connect your custom domain (jonesncharbonnet.com)

### Step 1 — Buy the domain
Buy `jonesncharbonnet.com` at https://porkbun.com (~$9/yr)

### Step 2 — Add DNS records at Porkbun
Go to your domain's DNS settings and add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Also add a CNAME record:
```
Type: CNAME
Host: www
Value: Sozark.github.io
```

### Step 3 — Set custom domain in GitHub
Repo Settings → Pages → Custom domain → type `jonesncharbonnet.com` → Save

GitHub will auto-provision a free SSL certificate within ~24 hours.

### Step 4 — Done
Your site will be live at https://jonesncharbonnet.com

---

## Adding Bubble Hero back
When ready, add a new project row in index.html (search for "NJEM project row")
and add a `page-bubblehero` div following the NJEM case study pattern.

## Formspree (contact form)
The form posts to your existing Formspree endpoint.
To create a new one for jonesncharbonnet.com: https://formspree.io
