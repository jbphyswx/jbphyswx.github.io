---
layout: single
title: "Station climate snapshot"
permalink: /climate-metrics/
author_profile: true
excerpt: "GHCN daily high/low versus a 1991–2020 climatology. Computed on GCP; stored as a static snapshot so the page survives after the project is torn down."
---

{% assign m = site.data.gcp_sprint_metrics %}

This page is a **static snapshot**. It does not call Google Cloud at request time. When the sprint project is deleted, these numbers stay.

{% if m %}
<p>
  Source: {{ m.source }}.
  Generated <time datetime="{{ m.generated_at }}">{{ m.generated_at }}</time>.
  {% if m.bytes_billed %}Bytes billed: {{ m.bytes_billed }}.{% endif %}
</p>
<p>{{ m.note }}</p>

<table>
  <thead>
    <tr>
      <th>Station</th>
      <th>Date</th>
      <th>Tmax (°C)</th>
      <th>Tmax clim</th>
      <th>Tmax anom</th>
      <th>Tmin (°C)</th>
      <th>Tmin clim</th>
      <th>Tmin anom</th>
    </tr>
  </thead>
  <tbody>
    {% for s in m.stations %}
      {% assign L = s.latest %}
      <tr>
        <td>{{ s.name }}{% if s.state %} ({{ s.state }}){% endif %}</td>
        <td>{{ L.date }}</td>
        <td>{{ L.tmax_c }}</td>
        <td>{{ L.tmax_clim_c }}</td>
        <td>{{ L.tmax_anomaly_c }}</td>
        <td>{{ L.tmin_c }}</td>
        <td>{{ L.tmin_clim_c }}</td>
        <td>{{ L.tmin_anomaly_c }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
{% else %}
<p>No snapshot file yet. Run <code>python scripts/ghcn_snapshot.py</code> from MyGCPCredit.</p>
{% endif %}
